import { LOGIN_FAILD } from "../../utils/data/__actionType";

const logoutSuccess = () => ({
  type: LOGIN_FAILD,
});

const doLogout = () => {
    return dispatch => {
        sessionStorage.removeItem('user');
        return dispatch(logoutSuccess())
    }
}

export default doLogout