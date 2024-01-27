import styled from "styled-components";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Who from "../components/Who";
import Works from "../components/Works";
import Navbar from "../components/Navbar";

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/b7.jpg");
  background-size: cover;
  &::-webkit-scrollbar{
    display: none;
  }
  font-family: 'Montserrat', sans-serif;
`

function App() {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth"});
  };
  return (
    <Container>
      <Navbar handleScroll={handleScroll}/>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
