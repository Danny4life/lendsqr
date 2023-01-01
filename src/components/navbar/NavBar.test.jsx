import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";


test("should rendered Navbar search input field", () => {
    render(<NavBar />);
    const userSearchBar = screen.getByPlaceholderText(/Search for anything/i);
    expect(userSearchBar).toBeInTheDocument();
})

test("should rendered logo text", () => {
    render(<NavBar />);
    const navText = screen.getByTestId("logo-text");
    expect(navText).toBeInTheDocument();
    expect(navText).toHaveTextContent("lendsqr");
   
})

test("user button element should be rendered in Navbar component", () => {
    render(<NavBar />);
    const userBtnEl = screen.getByRole("button");
    expect(userBtnEl).toBeInTheDocument();


})