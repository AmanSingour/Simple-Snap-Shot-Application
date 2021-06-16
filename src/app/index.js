import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Routes from "../routes";
import "./App.css";

import { useSelector } from "react-redux";
import { AuthProvider } from "../services/context";

function App() {

  const user = useSelector(state => state.auth.user)

  return (
    <div className="App" data-testid='app'>
      <Container >
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
