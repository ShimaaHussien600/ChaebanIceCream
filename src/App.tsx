import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './app_state/store';
import Routes from './Routes';

function App() {
  return (
    <Provider store={store.store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}
export default App;