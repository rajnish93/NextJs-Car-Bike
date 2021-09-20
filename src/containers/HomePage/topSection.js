import styled from "styled-components";
import tw from "twin.macro";
import Image from 'next/image'
import { SCREENS } from "../../components/responsive";
import TharCarImg from "../../assets/images/2020-Mahindra-Thar.png";
import BlobImg from "../../assets/images/blob.svg";
import { Button } from "../../components/button";
const TopSectionContainer = styled.div` min-height : 400px margin-top: 6em ${tw` w-full max-w-screen-2xl flex justify-between lg:pl-12 lg:pr-12 pl-3 pr-3 `} `;
const LeftContainer = styled.div`
  ${tw` w-1/2 flex flex-col `}
`;
const RightContainer = styled.div`
  ${tw` w-1/2 flex flex-col relative mt-20 `}
`;
const Slogan = styled.h1`
  ${tw` font-bold text-xl xl:text-4xl sm:text-2xl md:text-3xl lg:font-black md:font-extrabold text-black mb-4 sm:leading-snug lg:leading-normal xl:leading-relaxed `}
`;
const Description = styled.p`
  ${tw` text-xs lg:text-sm xl:text-lg sm:max-h-full overflow-hidden text-gray-800 `}
`;
const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -6em;
    top: -16em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -6em;
    top: -17em;
    transform: rotate(-30deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;
const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -2em;
  top: -5em;
  position: absolute;
  img {
    width: auto;
    height: 100%;
  }
  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -2em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -2em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -2em;
    top: -9em;
  }
`;
const ButtonContainer = styled.div`
  ${tw` flex flex-row mt-3 flex-wrap`};
`;
export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Self Drive Car or Bike Rentals</Slogan>
        <Description>
          We aim to solve the Car &amp; Bike renting problems. Always choose the
          best Car &amp; Bike from our local stores or order it remotely at the
          best price.
        </Description>
        <ButtonContainer>
          <Button text="Book Now" />
          {/* <Button theme="filled" text="Book Now" /> */}
        </ButtonContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <Image
            src={BlobImg}
            alt=""
            layout="responsive"
          />
        </BlobContainer>
        <StandaloneCar>
          <Image
            src={TharCarImg}
            alt=""
          />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
}