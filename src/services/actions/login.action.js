import { _defaultUser } from "../../utils";
import { LOGIN_SUCCESS } from "../../utils/data/__actionType";

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const doLogin = ({ email, password }) => {
  const Users = [..._defaultUser];
  return (dispatch) => {
    try {
      Users.concat(JSON.parse(localStorage.getItem("users")));
    } catch (e) {
      localStorage.setItem("users", "[]");
    } finally {
      const user = Users.find((user) => user.email === email);
      if (!user) {
        return { status: 404, message: "User not found!" };
      } else if (user.password === password) {
        var currentUser = { name: user.name, email: user.email };
        dispatch(loginSuccess(currentUser));
        sessionStorage.setItem("user", JSON.stringify(currentUser));
        return { status: 200, message: "Login Success!" };
      } else return { status: 401, message: "Wrong Password!" };
    }
  };
};

export default doLogin;
