import React from "react";
import AuthContext from "./AuthContext";
import history from "../../config/history";
import { _routes } from "../../utils";

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
    };
  }

  componentDidMount() {
    var user = JSON.parse(sessionStorage.getItem("user"));
    if (user === null) history.push(_routes.LOGIN);
    else this.setState({ username: user.name });
  }

  render() {
    return (
      <AuthContext.Provider value={{ username: this.state.username }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
