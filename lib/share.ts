import html2canvas from "html2canvas-pro";

export async function captureShareCard(
  element: HTMLElement
): Promise<void> {
  const canvas = await html2canvas(element, {
    width: 1080,
    height: 1920,
    scale: 1,
    backgroundColor: "#07070A",
    useCORS: true,
    logging: false,
  });

  canvas.toBlob(async (blob) => {
    if (!blob) return;

    // Try native share on mobile
    if (
      typeof navigator !== "undefined" &&
      navigator.share &&
      navigator.canShare?.({ files: [new File([blob], "soulprint.png", { type: "image/png" })] })
    ) {
      const file = new File([blob], "soulprint.png", { type: "image/png" });
      try {
        await navigator.share({ files: [file] });
        return;
      } catch {
        // User cancelled or share failed — fall through to download
      }
    }

    // Fallback: download
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "soulprint.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, "image/png");
}
