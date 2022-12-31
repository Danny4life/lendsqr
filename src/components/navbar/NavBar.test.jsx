import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";


test("search bar input should rendered", () => {
    render(<NavBar />);
    const userSearchBar = screen.getByPlaceholderText(/Search for anything/i);
    expect(userSearchBar).toBeInTheDocument();
})