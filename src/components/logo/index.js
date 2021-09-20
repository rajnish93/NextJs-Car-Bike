import styled from "styled-components";
import tw from "twin.macro";
import LogoImg from "../../assets/images/logo.jpeg";
import Image from 'next/image'
const LogoContainer = styled.div`
  ${tw` flex items-center`}
`;
const LogoText = styled.div`
  ${tw` text-xl md:text-2xl font-bold text-black m-1 `}
`;
// const Image = styled.div`
//   ${tw` h-6 md:h-9 `} img {
//     width: auto;
//     height: 100%;
//   }
// `;
export function Logo() {
  return (
    <LogoContainer>
      <Image
        src={LogoImg}
        alt="Logo"
        width={23}
        height={24}
      />
      <LogoText>Car &amp; Bike</LogoText>
    </LogoContainer>
  );
}