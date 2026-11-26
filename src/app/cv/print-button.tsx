"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full bg-ink px-4 py-1.5 font-medium text-paper hover:bg-accent"
    >
      Download PDF
    </button>
  );
}
