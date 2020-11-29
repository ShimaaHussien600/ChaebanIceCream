import styled from 'styled-components';

export const Div = styled.div`
  height: 100%;
  margin-top : 80px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex
`
export const DivContainer = styled.div`
  display: ${(props) => props.oneElement ? 'flex' : 'inline-flex'};
  overflow: ${(props) => props.oneElement ? 'none' : 'hidden'};
  width: 50%;
  margin-bottom: 40px;
  justify-content: ${(props) => props.oneElement ? 'center' : 'space-between'};
  align-items: center;

  @media (max-width: 767.98px) {
    width: 85%;
  }
  @media (max-width: 575.98px) {
    display: block;
    text-align: ${(props) => props.oneElement ? 'center' : 'left'};
  }
`

export const H3Text = styled.span`
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  font-size: 20px;
  font-family: cursive;
`
export const TextFormContainer = styled.div`
  width: 55%;
  justify-content: ${(props) => props.alignRight ? 'flex-start' : 'center'};
  align-items: center;
`