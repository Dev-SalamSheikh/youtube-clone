import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: ${(props) => (props.type === "sm" ? "100%" : "100%")};
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => (props.type === "sm" ? "0" : "16px")};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;
const Title = styled.h1`
  padding-top: ${(props) => (props.type === "sm" ? "0" : "0")};
  font-size: ${(props) => (props.type === "sm" ? "14px" : "16px")};
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: ${(props) => (props.type === "sm" ? "13px" : "14px")};
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0;
`;
const Info = styled.div`
  font-size: ${(props) => (props.type === "sm" ? "12px" : "14px")};
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type, src, title, name, views, channelImg }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={src} />
        <Details type={type}>
          <ChannelImage type={type} src={channelImg} />
          <Texts type={type}>
            <Title type={type}>{title}</Title>
            <ChannelName type={type}>{name}</ChannelName>
            <Info type={type}>{views}</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
