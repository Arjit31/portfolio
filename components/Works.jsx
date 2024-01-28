import React, { useState } from "react";
import styled from "styled-components";

const data = [
  { title: "Blog Website", image: "./img/blog.jpg", link: "https://frontblog1.onrender.com/" },
  { title: "Keeper App", image: "./img/keeper.jpg", link: "https://64d36e000fc1a14f7a431f74--remarkable-croquembouche-4c7402.netlify.app/" },
  { title: "E-Commerce Site", image: "./img/ecommerce.jpg", link: "https://arjit31.github.io/book-chill/index.html" },
  { title: "Simon Game", image: "./img/simon.jpg", link: "https://arjit31.github.io/simon/" },
  { title: "Calculator", image: "./img/calculator.jpg", link: "https://calculator-pv9c.onrender.com/" },
];

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
  align-items: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ListItems = styled.li`
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  font-family: "Open Sans", sans-serif;
  position: relative;

  &:after {
    content: "${(prop) => prop.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #007484;
    overflow: hidden;
    white-space: nowrap;
    width: 0%;
  }
  &:hover {
    &:after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
  @media only screen and (max-width: 1000px){
    font-size: 35px;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media only screen and (max-width: 1000px){
    visibility: hidden;
    flex: 0;
  }
`;
const Img = styled.img`
  height: 250px;
  width: 450px;
  object-fit: fill;
  margin-bottom: 30px;
  @media only screen and (max-width: 1000px){
    height: 0;
    width: 0;
  }
`;
const Img1 = styled.img`
  height: 390px;
  width: 560px;
  object-fit: fill;
  position: absolute;
  @media only screen and (max-width: 1000px){
    height: 0;
    width: 0;
  }
`;
const LinkOverlay = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  cursor: pointer;
`;

export default function Works() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleItemClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <Section id="work">
      <Align>
        <Container>
          <Left>
            <List>
              {data.map((item) => (
                <ListItems
                  key={item.title}
                  text={item.title}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => handleItemClick(item.link)}
                >
                  {item.title}
                </ListItems>
              ))}
            </List>
          </Left>
          <Right>
            <Img src={hoveredItem ? hoveredItem.image : "./img/noSignal1.jpg"}></Img>
            <Img1 src="./img/tvFrame3.png"></Img1>
            {hoveredItem && <LinkOverlay onClick={() => handleItemClick(hoveredItem.link)} />}
          </Right>
        </Container>
      </Align>
    </Section>
  );
}
