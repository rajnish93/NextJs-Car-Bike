import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navItems";
const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw` flex flex-row w-full max-w-screen-2xl items-center lg:pl-12 lg:pr-12 justify-between `}
`;
export function NavBar() {
    return (
        <NavbarContainer>
            <Logo />
            <NavItems />
        </NavbarContainer>
    );
}