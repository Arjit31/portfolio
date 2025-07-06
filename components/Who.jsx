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
  width: 90%;
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
  @media only screen and (max-width: 1000px){
    height: 170px;
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
              In this coding apocalypse, I am not just a programmer — I’m a relentless survivor thriving on challenges and adapting to the ever-evolving tech wasteland. I navigate the digital chaos with C/C++, JavaScript, TypeScript, and SQL. Armed with React.js, React Native, Next.js, Tailwind, Node.js, and Express.js, I build resilient web and mobile frontiers.

              I conquer the cloudy realms of MongoDB, PostgreSQL, and Redis, orchestrating real-time battles with Socket.IO and shaping robust backends with Prisma. With Git, GitHub, Postman, and Linux as my allies, I carve my path through this post-apocalyptic universe — turning chaos into creation, one line at a time.
            </Desc>
          </Right>
        </Container>
      </Align>
    </Section>
  );
}
