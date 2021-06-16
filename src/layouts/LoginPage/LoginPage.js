import React from "react";
import { Icon, Button, Form, Header, Message } from "semantic-ui-react";
import style from "./style.module.css";

import { validateInputs, validateForm } from "../../services";
import { doLogin } from "../../services/actions";
import { useDispatch } from "react-redux";

import { _routes } from "../../utils";

import history from "../../config/history";
import { Link } from "react-router-dom";

// THIS IS LOGIN PAGE ACCESSABLE BY ALL USERS
export const LoginPage = () => {
  // SINGLE STATETO STORE INPUT VALUES
  const [inputs, setInputs] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });

  // TO STORE API CALL RESPONSE
  const [res, setRes] = React.useState("");

  // REDUX DISPATCH
  const dispatch = useDispatch();

  // THIS IS A SINGLE METHOD TO HANDLE INPUT CHANGE
  const handleChange = (e) => {
    // SETTING CURRENT INPUT VALUE
    setInputs({ ...inputs, [e.target.name]: e.target.value });

    setErrors({ ...errors, [e.target.name]: validateInputs(e.target) });
  };

  // METHOD TO HANDLE FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();
    // API CALL......
    var res = dispatch(doLogin(inputs));
    if (res.status === 200) {
      history.push(_routes.HOME);
    } else {
      setRes(res.message);
    }
  };

  // METHOD TO VALIDATE FORM WITH MEMOIZED VALUE
  const memoizeValidate = React.useMemo(() => {
    console.log("Memo call");
    return validateForm(inputs)(errors);
  }, [inputs, errors]);

  return (
    <>
      <div className={style.Container} data-testid='login'>
        {/* I'VE USED SEMANTIC UI COMPONENTS */}
        <Form className={style.Form}
          data-testid='login-form'
         error={res !== ""}>
          <Header as="h2">Login</Header>
          <br />
          {res && (
            <Message error header="Action Forbidden" content={res} />
          )}
          <Form.Field className={style.InputField}>
            {/* <label>Username</label> */}
            <Form.Input
              iconPosition="left"
              placeholder="Email"
              type="email"
              name="email"
              required
              error={
                errors.email !== "" && {
                  content: errors.email,
                  pointing: "below",
                }
              }
            >
              <Icon name="at" />
              <input required onBlur={(e) => handleChange(e)} onChange={(e) => handleChange(e)} />
            </Form.Input>
          </Form.Field>
          <Form.Field className={style.InputField}>
            {/* <label>Password</label> */}
            <Form.Input
              iconPosition="left"
              placeholder="Password"
              required
              type="password"
              name="password"
              onBlur={(e) => handleChange(e)}
              onChange={(e) => handleChange(e)}
              error={
                errors.password !== "" && {
                  content: errors.password,
                  pointing: "below",
                }
              }
            >
              <Icon name="key" />
              <input />
            </Form.Input>
          </Form.Field>
          <Form.Field className={style.Button}>
            <Button
              type="submit"
              disabled={memoizeValidate}
              positive
              onClick={(e) => handleSubmit(e)}
            >
              LOGIN
            </Button>
          </Form.Field>
          <label>Don't have an account?<Link to={_routes.SIGNUP} >Signup</Link></label>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
