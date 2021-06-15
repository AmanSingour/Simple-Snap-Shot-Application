import React from "react";
import AuthContext from "./AuthContext";
import history from "../../config/history";
import { _routes } from "../../utils";

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    if(props.user !== null) {
      return{
        username: props.user.name
      }
    }
    return state
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
