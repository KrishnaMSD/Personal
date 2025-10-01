import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { DownloadCard } from "@/components/downloads/DownloadCard";

const mockDownload = {
  label: "CV" as const,
  file: "/downloads/CV.pdf",
  updated: "2025-02-01",
  sizeKB: 100,
};

describe("DownloadCard", () => {
  it("renders download information and toggles QR", async () => {
    render(<DownloadCard item={mockDownload} />);

    expect(screen.getByText(/Download CV/i)).toBeInTheDocument();

    const toggleButton = screen.getByRole("button", { name: /show qr/i });
    await userEvent.click(toggleButton);

    expect(screen.getByText(/Scan to save/i)).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /hide qr/i }));
    expect(screen.queryByText(/Scan to save/i)).not.toBeInTheDocument();
  });
});
