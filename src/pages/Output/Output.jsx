import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import '../../App.css';
import HeaderBar from '../../components/HeaderBar';
import NavigateButton from '../../components/NavigateButton';
import { setDate, setMessage } from '../../app_state/reducers/services/serviceActions';
import { applyTheme } from '../../app_state/reducers/theme/themeActions';
import { lightTheme } from '../../assets/themes';
import {
  GlobalStyle,
  Div,
  Container,
  DivContainer,
  H3Text,
  MessageContainer,
  MessageBody,
  ButtonText
} from './Styles';
import GitHub from '@material-ui/icons/GitHub';

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  getDate() {
    const fullDate = new Date(this.props.selectedDate)
    let month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    let selectedYear = fullDate.getFullYear()
    let selectedMonth = month[fullDate.getMonth()]
    let selectedDay = fullDate.getDate()

    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dayName = days[fullDate.getDay()];

    return [dayName, selectedDay, selectedMonth, selectedYear].join(' ');
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value })
  };

  handleNew = () => {
    this.props.setDate(new Date())
    this.props.setMessage("")
    this.props.applyTheme(lightTheme)
    this.props.history.push('/')

  };
  handleEdit = () => {
    this.props.history.push('/')
  };
  openGitHub = () => {
    window.open("https://github.com/ShimaaHussien600/ChaebanIceCream", "_blank")
  }

  render() {
    const { theme, messageValue } = this.props
    const themeName = theme.themeName
    const themeColor = theme.textColor

    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          {themeName !== 'pinky' && <GlobalStyle />}

          <HeaderBar />

          {/* The main Body content */}
          <Div>
            {/* The date view */}
            <Container>
              <DivContainer alignLeft>
                <H3Text decoration> {this.getDate()} </H3Text>
              </DivContainer>

              {/* The textarea view */}
              <DivContainer top>
                <MessageContainer>
                  <MessageBody>
                    {messageValue ? messageValue : 'This is a default message. \n Enter Edit to edit it or New to Enter new form.'}
                  </MessageBody>
                </MessageContainer>
              </DivContainer>

              {/* Github repo information */}
              <DivContainer >
                <GitHub fontSize={"large"} style={{ color: themeColor, margin: "5px" }} />
                <ButtonText onClick={this.openGitHub}> Press me for more details! </ButtonText>
              </DivContainer >

              {/* Save button view */}
              <DivContainer >
                <NavigateButton
                  type="New"
                  onClick={this.handleNew} />
                <NavigateButton
                  type="Edit"
                  onClick={this.handleEdit} />
              </DivContainer >

            </Container>
          </Div>

        </div>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.themeReducer.theme,
    selectedDate: state.serviceReducer.selectedDate,
    messageValue: state.serviceReducer.messageValue
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setDate: (date) => {
      dispatch(setDate(date));
    },
    setMessage: (message) => {
      dispatch(setMessage(message));
    },
    applyTheme: (theme) => {
      dispatch(applyTheme(theme));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Output);