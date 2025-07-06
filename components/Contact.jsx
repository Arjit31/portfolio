import React, { Suspense, useEffect, useRef } from "react";
import styled from "styled-components";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Box3, Vector3 } from "three";

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
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 40px;
  margin: 0;
  @media only screen and (max-width: 1000px){
    font-size: 30px;
  }
`;

const SubText = styled.p`
  font-size: 20px;
  color: lightgray;
  @media only screen and (max-width: 1000px){
    font-size: 12px;
  }
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Connection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  margin-top: 5px;
  @media only screen and (max-width: 1000px){
    font-size: 12px;
  }
`;

const Line = styled.img`
  height: 2px;
`;

const Tagline = styled.h3`
  color: #008192;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const SocialLink = styled.a`
  color: white;
  background-color: ${(props) => props.bgColor || "#555"};
  padding: 15px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 22px;

  &:hover {
    opacity: 0.85;
  }
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const Info = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

function ZombieModel() {
  const ref = useRef();
  const { scene } = useGLTF('./model/knowledge_network.glb');

  useEffect(() => {
    if (scene) {
      // Compute bounding box
      const box = new Box3().setFromObject(scene);
      const center = new Vector3();
      box.getCenter(center);

      // Shift to center pivot
      scene.position.sub(center);
    }
  }, [scene]);

  return (
    <group ref={ref} position={[0, -1, 0]}>
      <primitive object={scene} scale={[0.002, 0.002, 0.002]} />
    </group>
  );
}

export default function Contact() {
  return (
    <Section id="contact">
      <Align>
        <Container>
          <Left>
            <Title>Send A Survival Ping</Title>
            <SubText>
              In this tech wasteland, I’m always listening for allied signals. Drop a message, connect across the scattered networks, and let’s survive and thrive together.
            </SubText>
            <Connection>
              <Line src="./img/line.png" />
              <Tagline>My encrypted frequencies:</Tagline>
            </Connection>
            <SocialContainer>
              <SocialLink href="https://www.instagram.com/arjit_ak/" bgColor="#C13584"><FaInstagram /></SocialLink>
              <SocialLink href="https://github.com/Arjit31" bgColor="#302f2d"><FaGithub /></SocialLink>
              <SocialLink href="https://www.linkedin.com/in/arjitkhare/" bgColor="#0077b5"><FaLinkedinIn /></SocialLink>
              <SocialLink href="https://x.com/ArjitKhare31" bgColor="#000000"><FaXTwitter /></SocialLink>
            </SocialContainer>
            <Info>
              <a href="mailto:apk20023110@gmail.com" style={{ color: "grey", textDecoration: "none", flex: 1 }}>
                Email: apk20023110@gmail.com
              </a>
              <p style={{ color: "grey", textDecoration: "none", flex: 1 }}>
                Phone: +91 7828120657
              </p>
            </Info>
          </Left>
          <Right>
            <Canvas>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <Suspense fallback={null}>
                <ZombieModel />
              </Suspense>
              <OrbitControls target={[0, -1, 0]} autoRotate autoRotateSpeed={2} enableDamping />
            </Canvas>
          </Right>
        </Container>
      </Align>
    </Section>
  );
}
