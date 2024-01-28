import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  height: 40px;
  @media only screen and (max-width: 1000px){
    height: 30px;
  }
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
const ListItems = styled.li`
  cursor: pointer;
  &:active {
    color: #d4d4d4;
  }
  @media only screen and (max-width: 1000px){
    font-size: 12px;
  }
`;
const Icons = styled.div``;
const Button = styled.button`
  width: 70px;
  padding: 7px;
  background-color: #09616c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  &:active {
    background-color: #103c42;
  }
  @media only screen and (max-width: 1000px){
    font-size: 12px;
    width: 50px;
  }
`;

export default function Navbar({ handleScroll }) {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/l8.png" />
          <List>
            <ListItems onClick={() => handleScroll("home")}>Home</ListItems>
            <ListItems onClick={() => handleScroll("about")}>About</ListItems>
            <ListItems onClick={() => handleScroll("work")}>Work</ListItems>
            <ListItems onClick={() => handleScroll("contact")}>
              Contact
            </ListItems>
          </List>
        </Links>
        <Icons>
          <Button onClick={() => handleScroll("contact")}>Hire!</Button>
        </Icons>
      </Container>
    </Section>
  );
}
