import styled from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../../components/margin";
import { NavBar } from "../../components/navBar";
import { TopSection } from "./topSection";
import { WorkingSteps } from "./workingSteps";
const TopContainer = styled.div`
  ${tw` flex flex-col w-full h-full items-center overflow-x-hidden `};
`;
export function HomePage() {
  return <TopContainer>
    <NavBar />
    <Marginer direction="vertical" margin="5em" />
    <TopSection />
    <Marginer direction="vertical" margin="8em" />
    <WorkingSteps />
  </TopContainer>;
}