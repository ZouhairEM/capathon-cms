import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FaqSection from "../src/app/ui/faqSection";

describe("FaqSection Component", () => {
  test("renders all AccordionTab headers", () => {
    render(<FaqSection />);

    const headers = screen.getAllByRole("button");

    expect(headers.length).toBeGreaterThanOrEqual(1);

    headers.forEach((header) => {
      expect(header.textContent).toBeTruthy();
    });
  });
});
