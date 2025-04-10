import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Faq from "../src/app/ui/faq";

describe("Faq Component", () => {
  test("renders all AccordionTab headers", () => {
    // Render the Faq component into the virtual DOM
    render(<Faq />);

    // Query all elements with the role "button" (AccordionTab headers are rendered as buttons)
    const headers = screen.getAllByRole("button");

    // Assert that there are exactly 5 headers rendered
    expect(headers).toHaveLength(5);

    // Assert that the text content of the headers matches the expected values
    expect(headers.map((header) => header.textContent)).toEqual([
      "I have registered but haven't received a confirmation e-mail yet?",
      "I have registered but I want to cancel, what now?",
      "Do I need to be a developer to join?",
      "I registered solo, what now? to be a developer to join?",
      "I registered as a team, what now?",
    ]);
  });
});
