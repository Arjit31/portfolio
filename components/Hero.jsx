import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Align = styled.div`
  height: calc(100vh - 80px);
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  scroll-snap-align: center;
  width: 85%;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* gap: 10px; */
`;
const Title = styled.h1`
  font-size: 60px;
  margin: 0;
  @media only screen and (max-width: 1000px){
    font-size: 30px;
  }
`;
const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  @media only screen and (max-width: 1000px){
    font-size: 12px;
  }
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #008192;
`;
const Desc = styled.p`
  font-size: 20px;
  margin: 0;
  color: lightgray;
  @media only screen and (max-width: 1000px){
    font-size: 12px;
  }
`;
const Right = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Img = styled.img`
  height: 450px;
  object-fit: contain;

  animation: animate1 2s infinite ease alternate;

  @keyframes animate1 {
    to {
      transform: scale(0.97);
    }
    from {
      transform: scale(1);
    }
  }
  @media only screen and (max-width: 1000px){
    height: 250px;
  }
`;
const Img1 = styled.img`
  height: 500px;
  object-fit: contain;
  position: absolute;
  /* top: 0;
  bottom: 0; */
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: scale(1.05);
    }
    from {
      transform: scale(1);
    }
  }
  @media only screen and (max-width: 1000px){
    height: 300px;
  }
`;

export default function Hero() {
  return (
    <Section id="home">
      <Align>
        <Container>
          <Left>
            <Title>Code. Adapt. Triumph.</Title>
            <WhatIDo>
              <Line src="./img/line.png"></Line>
              <Subtitle>What I do</Subtitle>
            </WhatIDo>
            <Desc>
              I am not just a coder; I am a survivor thriving amidst challenges,
              adapting to the ever-evolving tech landscape, and forging a path
              through the coding wilderness.
            </Desc>
          </Left>
          <Right>
            {/* 3D Model */}
            <Img1 src="./img/hb6.png"></Img1>
            <Img src="./img/sea(2).png"></Img>
          </Right>
        </Container>
      </Align>
    </Section>
  );
}
