import React from "react";
import { Icon, Button, Form, Header } from "semantic-ui-react";
import style from "./style.module.css";

import { validate } from "../../services";

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

  // THIS IS A SINGLE METHOD TO HANDLE INPUT CHANGE
  const handleChange = (e) => {
    // SETTING CURRENT INPUT VALUE
    setInputs({ ...inputs, [e.target.name]: e.target.value });

    setErrors({ ...errors, [e.target.name]: validate(e.target) });
  };

  // METHOD TO HANDLE FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();
    // API CALL......
  };

  return (
    <>
      <div className={style.Container}>
        {/* I'VE USED SEMANTIC UI COMPONENTS */}
        <Form className={style.Form}>
          <Header as="h2">Login</Header>
          <br />
          <Form.Field className={style.InputField}>
            {/* <label>Username</label> */}
            <Form.Input
              iconPosition="left"
              placeholder="Username or Email"
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
              <input required onChange={(e) => handleChange(e)} />
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
              disabled={
                Object.values(inputs).includes("") ||
                Object.values(errors).find((e) => e !== "")
              }
              positive
              onClick={(e) => handleSubmit(e)}
            >
              LOGIN
            </Button>
          </Form.Field>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
