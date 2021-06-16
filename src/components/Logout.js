import React from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { doLogout } from "../services/actions";
import { _routes } from "../utils";

const Logout = () => {
  const dispatch = useDispatch();
  const HandleLogout = () =>{ dispatch(doLogout())
    return <Redirect to={_routes.LOGIN} />

}
  return (
    <>
      <h1>Loading...</h1>
      <HandleLogout />
    </>
  );
};

export default Logout;
