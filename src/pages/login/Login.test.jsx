import { render, screen } from "@testing-library/react"
import Login from "./Login";

test("Email input should be rendered", () => {
    render(<Login />);
    const userEmailEl = screen.getByPlaceholderText(/Email/i);
    expect(userEmailEl).toBeInTheDocument();
});

test("Password input should be rendered", () => {
    render(<Login />);
    const userPasswordEl = screen.getByPlaceholderText(/Password/i);
    expect(userPasswordEl).toBeInTheDocument();
})

test("Button element should be rendered", () => {
    render(<Login />);
    const userButtonEl = screen.getByRole("button");
    expect(userButtonEl).toBeInTheDocument();
})