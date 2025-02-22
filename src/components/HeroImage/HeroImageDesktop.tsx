import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

// components
import Image from "next/image";

// styles
const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const StyledImage = styled(Image)<{ isHovering: boolean }>`
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.isHovering ? 1 : 0)};
  object-fit: "cover";
  object-position: ${(props) =>
    props.isHovering ? "center 80%" : "center 20%"};
`;

export function HeroImageDesktop() {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <StyledImage
        alt="Die Bodemännle auf einem Umzug"
        src={"/Gruppenbild-ohne-Maske.jpeg"}
        fill={true}
        isHovering={isHovering}
      />
      <StyledImage
        alt="Die Bodemännle auf einem Umzug"
        src={"/Gruppenbild-mit-Maske.jpeg"}
        fill={true}
        isHovering={!isHovering}
      />
    </Wrapper>
  );
}
