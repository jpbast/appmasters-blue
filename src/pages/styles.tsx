import styled, { css } from "styled-components";

export const HomeWrapper = styled.div``;

export const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const HomeInfo = styled.div`
  h1 {
    font-size: 72px;
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
  }
  p {
    font-size: 18px;
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
    color: ${(props) => props.theme.colors.paragraph};
  }
  .link {
    margin: 16px auto;
    max-width: 800px;
    text-align: right;
  }
  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    font-weight: 600;
  }
`;

export const HomeCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 120px;
  gap: 32px;
`;

export const HomeCard = styled.div<{ height?: string }>`
  position: relative;
  background-color: ${(props) => props.theme.colors.secondary};
  height: ${(props) => props.height || "312px"};
  width: 280px;
  box-shadow: 0px 10px 32px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: flex-end;
  padding: 26px;
  p {
    color: #ffffff;
    font-size: 24px;
    margin: 0;
  }
  .index-round {
    position: absolute;
    top: -45px;
    width: 85px;
    height: 85px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.primary};
    h2 {
      font-size: 48px;
      color: ${(props) => props.theme.colors.secondary};
      margin: 0;
    }
  }
`;
