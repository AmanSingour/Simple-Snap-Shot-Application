import { _defaultUser } from "../../utils";

const doSignup = (data) => {
  var Users = [..._defaultUser];
  return (dispatch) => {
    try {
      Users = JSON.parse(localStorage.getItem("users")).concat(Users);
    } catch (e) {
      localStorage.setItem("users", "[]");
    } finally {

      const index = Users.findIndex((user) => user.email === data.email);

      console.log(index)

      if (index<0) {
        var newUsers = JSON.parse(localStorage.getItem("users")).concat([data]);
        localStorage.setItem("users", JSON.stringify(newUsers));
        return { status: 201, message: "Signup Success!" };
      } else {
        return { status: 403, message: "User already exist!\n  Please login".split("\n") };
      }
    }
  };
};

export default doSignup;
