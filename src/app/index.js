import { HashRouter as Router } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Routes from "../routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Router>
          <Routes />
        </Router>
      </Container>
    </div>
  );
}

export default App;
