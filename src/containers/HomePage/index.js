import styled from "styled-components";
import tw from "twin.macro";
import { NavBar } from "../../components/navBar";
const TopContainer = styled.div`
  ${tw` flex flex-col w-full h-full items-center overflow-x-hidden `};
`;
export function HomePage() {
    return <TopContainer><NavBar /></TopContainer>;
}