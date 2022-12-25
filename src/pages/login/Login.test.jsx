import { render, screen } from "@testing-library/react"
import Login from "./Login";

test("Email input should be rendered", () => {
    render(<Login />);
    const userEmailEl = screen.getByPlaceholderText(/Email/i);
    expect(userEmailEl).toBeInTheDocument();
})