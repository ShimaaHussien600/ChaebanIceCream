import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../App.css';
import HeaderBar from '../../components/HeaderBar';
import ThemeSelector from '../../components/ThemeSelector';
import DatePickerDialog from '../../components/DatePickerDialog';
import MultilineTextField from '../../components/MultilineTextField';
import NavigateButton from '../../components/NavigateButton';
import { setMessage } from '../../app_state/reducers/services/serviceActions';
import {
  GlobalStyle,
  Div,
  DivContainer,
  H3Text,
  TextFormContainer
} from './Styles';


class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.messageValue
    };
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value })
  };

  handleSubmit = () => {
    let message = this.state.message;
    if (message && (message.length > 0)) {
      this.props.setMessage(this.state.message)
      this.props.history.push('/output')
    }
    else {
      toast('🦄 Enter your message!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  render() {
    const { message } = this.state
    const { theme } = this.props
    const themeName = theme.themeName

    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          {themeName !== 'pinky' && <GlobalStyle />}

          <HeaderBar />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* The main Body content */}
          <Div>
            {/* The date view */}
            <DivContainer>
              <H3Text>Choose The date </H3Text>
              <TextFormContainer alignRight>
                <DatePickerDialog />
              </TextFormContainer>
            </DivContainer>

            {/* The textarea view */}
            <DivContainer>
              <H3Text>Enter your message </H3Text>
              <TextFormContainer top>
                <MultilineTextField
                  message={message}
                  handleChange={this.handleChange}
                />
              </TextFormContainer>
            </DivContainer>

            {/* Theme view */}
            <DivContainer >
              <H3Text>Choose Theme to preview </H3Text>
              <ThemeSelector />
            </DivContainer>

            {/* Save button view */}
            <DivContainer oneElement>
              <NavigateButton
                type="Done"
                onClick={this.handleSubmit} />
            </DivContainer >

          </Div>

        </div>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("stateINPUT", state)
  return {
    theme: state.themeReducer.theme,
    selectedDate: state.serviceReducer.selectedDate,
    messageValue: state.serviceReducer.messageValue
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setMessage: (message) => {
      dispatch(setMessage(message));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);