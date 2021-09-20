import React from "react";
import styled from "styled-components";
const HorizontalMargin = styled.span`
  display: flex;
  min-width: ${({ margin }) => typeof margin === "string" ? margin : `${margin}px`};
`;
const VerticalMargin = styled.span`
  display: flex;
  min-height: ${({ margin }) => typeof margin === "string" ? margin : `${margin}px`};
`;
function Marginer(props) {
    const { direction } = props;
    if (direction === "horizontal")
        return React.createElement(HorizontalMargin, Object.assign({}, props));
    else {
        return React.createElement(VerticalMargin, Object.assign({}, props));
    }
}
Marginer.defaultProps = {
    direction: "horizontal",
};
export { Marginer };