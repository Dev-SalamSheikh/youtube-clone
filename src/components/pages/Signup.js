import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 60px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.textSoft};
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const SignUpText = styled.p`
  cursor: pointer;
  font-size: 12px;

  span {
    color: #3ea6ff;
    padding-left: 10px;
  }
`;

const More = styled.div`
  display: flex;
  font-size: 10px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 20px;
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link00 = styled.span`
  margin-left: 30px;
`;

const Signup = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign Up</Title>
        <SubTitle>to create an account</SubTitle>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <Button>Sign up</Button>
        <Title>Or</Title>
        <SignUpText>
          already have an account?
          <span>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Sign In
            </Link>
          </span>
        </SignUpText>
      </Wrapper>
      <More>
        English (US)
        <Links>
          <Link00>Help</Link00>
          <Link00>Privacy</Link00>
          <Link00>Terms</Link00>
        </Links>
      </More>
    </Container>
  );
};

export default Signup;
