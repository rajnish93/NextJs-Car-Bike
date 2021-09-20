import styled from "styled-components";
import tw from "twin.macro";
const TopContainer = styled.div`
  ${tw` flex flex-col w-full h-full items-center overflow-x-hidden `};
`;
export function HomePage() {
    return <TopContainer>Hello Rajnish</TopContainer>;
}