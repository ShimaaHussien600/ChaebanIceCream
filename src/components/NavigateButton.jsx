import { withRouter } from 'react-router-dom'
import styled from 'styled-components';

const StyledButton = styled.button`
  color: ${(props) => props.theme.secondaryTextColor};
  background-color: ${(props) => props.theme.primary};
  box-shadow: none;
  border: 0px;
  border-radius: 4px;
  font-size: 1.2em;
  min-width: 120px;
  padding: 12px;
  margin: 20px 0px 0px 0px;

  @media (max-width: 575.98px) {
    margin-top: 20px;
    text-align: center
  }
`;

const NavigateButton = withRouter(({ history }) => (
    <StyledButton onClick={() => history.push('/output')}>Save</StyledButton>
))

export default NavigateButton;