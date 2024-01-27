import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
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
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 60px;
  margin: 0;
`;
const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
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
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Img = styled.img`
  height: 325px;
  object-fit: contain;
  border-radius: 50%;
  border: dashed #aff6ff 10px;
  /* box-shadow: 0 0 10px white; */
  animation: animate2 2s infinite ease alternate; // ease alternate

  @keyframes animate2 {
    to {
      border: solid #5cc0a8 10px;
      box-shadow: 0 0 50px 15px #5cc0a8;
    }
    from {
      border: solid #0c6470 10px;
    }
  }
  &::before {
    content: "";
    position: absolute;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      transparent,
      rgba(168, 239, 255, 1),
      transparent 30%
    );
    animation: rotate 4s linear infinite;
  }
  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }
`;

export default function Who() {
  return (
    <Section id="about">
      <Align>
        <Container>
          <Left>
            <Img src="./img/profile4.png"></Img>
          </Left>
          <Right>
            <Title>Byte Warrior</Title>
            <WhatIDo>
              <Line src="./img/line.png"></Line>
              <Subtitle>About Me</Subtitle>
            </WhatIDo>
            <Desc>
              In the midst of this coding apocalypse, I am not merely a
              programmer; I am a relentless survivor thriving on challenges and
              adapting to the ever-evolving tech wasteland. I navigate the
              digital chaos with languages like C/C++, Javascript, and HTML+CSS.
              My weapon of choice – Nodejs, VScode, Git, and Github – are
              essential companions in this perilous journey. With ReactJs and
              Express.js by my side, I conquer the cloudy realms of MongoDB and
              dance with relational databases like mySql. I am not just a coder;
              I am a tech survivor carving my path through the post-apocalyptic
              coding universe.
            </Desc>
          </Right>
        </Container>
      </Align>
    </Section>
  );
}
