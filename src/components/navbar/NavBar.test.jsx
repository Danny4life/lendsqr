import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";


test("should rendered Navbar search input field", () => {
    render(<NavBar />);
    const userSearchBar = screen.getByPlaceholderText(/Search for anything/i);
    expect(userSearchBar).toBeInTheDocument();
})

test("should rendered Navbar logo text", () => {
    render(<NavBar />);
    const navbarLogoText = screen.getByText(/lendsqr/i);
    expect(navbarLogoText).toBeInTheDocument();
   
})