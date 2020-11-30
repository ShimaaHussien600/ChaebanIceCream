import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    background-image: none
  }
`
export const Div = styled.div`
  height: 100%;
  margin-top : 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex
`
export const Container = styled.div`
  height: 100%;
  width: 60%;
  margin-bottom: 60px;
  justify-content: center;
  align-items: center;

  @media (max-width: 767.98px) {
    width: 77%;
  }
`
export const DivContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) => props.alignLeft ? 'flex-start' : 'center'};
  align-items: center;
  text-align: ${(props) => props.alignLeft ? 'left' : 'center'};
  margin-top: ${(props) => props.top ? '40px' : '0px'};
`

export const MessageContainer = styled.div`
  width: 70%;
  min-height: 200px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 6px 15px 0 rgb(0 0 0 / 0.15);
  border-radius: 5px;

  @media (max-width: 767.98px) {
    width: 85%;
  }
`

export const H3Text = styled.span`
  color: ${(props) => props.theme.textColor};
  text-decoration: ${(props) => props.decoration ? "underline" : "none"};
  font-weight: bold;
  font-size: 20px;
  font-family: cursive;
`
export const ButtonText = styled.button`
  background: transparent;
  border: 0px;
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  font-size: 20px;
  font-family: cursive;

  &:focus {
    outline: none !important;
    box-shadow: none;
  }
`
export const MessageBody = styled.p`
  color: ${(props) => props.theme.textMessageColor};
  font-size: 20px;
  font-family: cursive;
`