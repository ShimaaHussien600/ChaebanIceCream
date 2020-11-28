import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import { useSelector } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Routes from './Routes';

function App() {
  const themeSelected = useSelector((state: any) => state.themeReducer.theme);
  const themeName = themeSelected.themeName
  const theme = createMuiTheme({
    palette: {
      type: themeName === 'dark' ? 'dark' : 'light'
    },
  });

  return (

    <Router>
      {<ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>}
    </Router>
  );
}
export default App;