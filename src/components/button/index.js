import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
const BaseButton = styled.div`
  ${tw` pl-5 pr-5 pt-3 pb-3 outline-none rounded-md text-white font-semibold border-transparent border-2 border-solid focus:outline-none transition-all duration-200 ease-in-out m-1 `};
`;
const OutlinedButton = styled(BaseButton)`
  ${tw`
  bg-blue-500
  hover:bg-transparent
  hover:text-blue-500
  hover:border-blue-500
   `};
`;
const FilledButton = styled(BaseButton)`
  ${tw`
  border-blue-500
  hover:bg-blue-500
  text-blue-500
  hover:border-transparent
  hover:text-white
  bg-transparent
   `};
`;
export function Button(props) {
    const { theme, text, className } = props;
    if (theme === "filled")
        return React.createElement(FilledButton, { className: className }, text);
    else
        return React.createElement(OutlinedButton, { className: className }, text);
}