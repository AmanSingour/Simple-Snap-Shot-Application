import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Routes from "../routes";
import "./App.css";

import { LOGIN_FAILD, LOGIN_SUCCESS } from "../utils/data/__actionType";
import { useDispatch, useSelector } from "react-redux";
import { AuthProvider } from "../services/context";

function App() {

  const user = useSelector(state => state.auth.user)

  return (
    <div className="App">
      <Container>
        <AuthProvider user={user}>
          <Router>
            <Routes />
          </Router>
        </AuthProvider>
      </Container>
    </div>
  );
}

export default App;
