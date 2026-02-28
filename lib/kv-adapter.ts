import { kv } from "@vercel/kv";
import type { Adapter, AdapterUser, VerificationToken } from "next-auth/adapters";

export const kvAdapter: Adapter = {
  async createUser(user) {
    const id = crypto.randomUUID();
    const newUser: AdapterUser = {
      ...user,
      id,
      emailVerified: user.emailVerified ?? new Date(),
    };
    await kv.set(`user:${id}`, newUser, { ex: 60 * 60 * 24 * 7 }); // 7 day TTL
    await kv.set(`user:email:${user.email}`, id, { ex: 60 * 60 * 24 * 7 });
    return newUser;
  },

  async getUser(id) {
    return await kv.get<AdapterUser>(`user:${id}`);
  },

  async getUserByEmail(email) {
    const id = await kv.get<string>(`user:email:${email}`);
    if (!id) return null;
    return await kv.get<AdapterUser>(`user:${id}`);
  },

  async getUserByAccount() {
    return null;
  },

  async updateUser(user) {
    const existing = await kv.get<AdapterUser>(`user:${user.id}`);
    if (!existing) throw new Error("User not found");
    const updated = { ...existing, ...user };
    await kv.set(`user:${user.id}`, updated, { ex: 60 * 60 * 24 * 7 });
    return updated;
  },

  async linkAccount() {
    return undefined;
  },

  async createSession() {
    // JWT strategy — sessions not stored
    return undefined as never;
  },

  async getSessionAndUser() {
    return null;
  },

  async updateSession() {
    return null;
  },

  async deleteSession() {},

  async createVerificationToken(token) {
    const key = `vt:${token.identifier}:${token.token}`;
    await kv.set(key, token, { ex: 60 * 60 }); // 1 hour TTL
    return token;
  },

  async useVerificationToken({ identifier, token }) {
    const key = `vt:${identifier}:${token}`;
    const stored = await kv.get<VerificationToken>(key);
    if (!stored) return null;
    await kv.del(key);
    return stored;
  },
};
