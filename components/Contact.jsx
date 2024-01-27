import React, { useRef, useState } from "react";
import styled from "styled-components";
import Map from "./Map";
import emailjs from "@emailjs/browser";

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
  align-items: center;
`;
const Title = styled.h1`
  font-weight: 200;
  margin: 0;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  gap: 25px;
`;
const Input = styled.input`
  padding: 20px;
  background-color: #9ecdd3;
  border: none;
  border-radius: 5px;
  outline: none;
`;
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #9ecdd3;
  border: none;
  border-radius: 5px;
  outline: none;
`;
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
  font-weight: 200;
  &:active{
    background-color: #103c42;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Contact() {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ceb01wt",
        "template_prnc8m8",
        ref.current,
        "p7ZrJdqyYlcx9aX7R"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section id="contact">
      <Align>
        <Container>
          <Left>
            <Form ref = {ref} onSubmit={handleSubmit}>
              <Title>Contact Me</Title>
              <Input placeholder="Name" type="text" name="name"></Input>
              <Input placeholder="Email" type="email" name="email"></Input>
              <TextArea
                placeholder="Write your message..."
                rows={8}
                name="message"
              ></TextArea>
              <Button type="submit">
                Send
              </Button>
              {success && "Your message has been sent. We will get back to you soon :)"}
            </Form>
          </Left>
          <Right>
            <Map></Map>
          </Right>
        </Container>
      </Align>
    </Section>
  );
}
