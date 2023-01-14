import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";


test("dashboard page should rendered user text", ()=> {
    render(<Dashboard />);
    const userText = screen.getByTestId("user-text");
    expect(userText).toBeInTheDocument();
    expect(userText).toHaveTextContent("Users");
})

test("dashboard page should rendered widget", ()=> {
    render(<Dashboard />);
    const widget = screen.getByTestId("widgets");
    expect(widget).toBeInTheDocument();
    
})