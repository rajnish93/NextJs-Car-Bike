import tw from "twin.macro";
import styled from "styled-components";
export const StyledApp = styled.div`
  ${tw`flex justify-center items-center h-screen`}
`;
const Slogan = styled.h1`
  ${tw` font-bold text-xl xl:text-4xl sm:text-2xl md:text-3xl lg:font-black md:font-extrabold text-black mb-4 sm:leading-snug lg:leading-normal xl:leading-relaxed `}
`;
export default function Home() {
  return (
    <StyledApp>
      <Slogan>
        Welcome to NextJs with TailwindCSS with twin.macro setup.
      </Slogan>
    </StyledApp>
  );
}