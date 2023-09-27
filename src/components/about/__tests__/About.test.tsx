import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import About from "../About";

describe("About Component", () => {
  it.only("renders the whole component", async () => {
    render(<About />);
    
    await waitFor(() => {
        expect(screen.getByText("Technology always was my passion and I'm fully committed to it. I'm open-minded to learning and growing in different environments.")).toBeInTheDocument()
    })
    const aboutElement = screen.getByTestId("about");
    expect(aboutElement).toBeInTheDocument();
    
    expect(screen.getByText("A little about me")).toBeInTheDocument();
    expect(screen.getByText("My 12 years as a professional musician gave me the ability to focus and be flexible to new challenges. Also, granted me a high grade of discipline and commitment to any particular task that required responsibilities and hard work.")).toBeInTheDocument();
    expect(screen.getByText("I enjoy working with people who seek to innovate and grow every day as a team and as a person.")).toBeInTheDocument();

  });
});