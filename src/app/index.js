import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Routes from "../routes";
import "./App.css";

import { LOGIN_FAILD, LOGIN_SUCCESS } from "../utils/data/__actionType";
import { useDispatch } from "react-redux";
import {AuthProvider} from "../services/context";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    let user = null;
    try {
      user = JSON.parse(sessionStorage.getItem("user"));
      if (user) dispatch({ type: LOGIN_SUCCESS, payload: user });
    } catch (e) {
      dispatch({ type: LOGIN_FAILD });
    }
  }, []);
  return (
    <div className="App">
      <Container>
        <AuthProvider>
          <Router>
            <Routes />
          </Router>
        </AuthProvider>
      </Container>
    </div>
  );
}

export default App;
