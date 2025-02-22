import * as React from "react";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// components
import Image from "next/image";

// styles
const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const AnimatedImage = styled(Image)<{ show: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${(props) => (props.show ? fadeIn : fadeOut)} 1s ease-in-out;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

export function HeroImageMobile() {
  const [showPrimary, setShowPrimary] = useState(true);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) return () => clearInterval(interval);
    const interval = setInterval(() => {
      setShowPrimary((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const clickHandler = () => {
    setShowPrimary((prev) => !prev);
    setClicked(true);
  };
  return (
    <Wrapper onClick={() => clickHandler()}>
      <AnimatedImage
        alt="Die Bodemännle auf einem Umzug"
        src={"/Gruppenbild-ohne-Maske.jpeg"}
        fill={true}
        show={showPrimary}
        style={{
          objectPosition: "center 10%",
          zoom: 1.5,
        }}
      />
      <AnimatedImage
        alt="Die Bodemännle auf einem Umzug"
        src={"/Gruppenbild-mit-Maske.jpeg"}
        fill={true}
        show={!showPrimary}
        style={{ objectPosition: "center 20%" }}
      />
    </Wrapper>
  );
}
