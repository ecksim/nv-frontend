import * as React from "react";
import styled from "styled-components";

// components
import Image from "next/image";

// styles
const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 310px;
`;

type Props = {};

type State = {};

export default class HeroImage extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <Wrapper>
        <Image
          alt="Die Bodemännle auf einem Umzug"
          src={"/headerQuadratic.jpg"}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "center 80%" }}
        />
      </Wrapper>
    );
  }
}
