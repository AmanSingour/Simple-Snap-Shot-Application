import React from "react";
import { Icon, Button, Form, Header } from "semantic-ui-react";
import style from "./style.module.css";

import { validateForm, validateInputs as validate } from "../../services";

// THIS IS Signup PAGE ACCESSABLE BY ALL USERS
export const SignupPage = () => {
  // SINGLE STATE TO STORE INPUT VALUES
  const [inputs, setInputs] = React.useState({
    email: "",
    name: "",
    password: "",
    conf_password: "",
  });

  // SINGLE STATE TO STORE INPUT ERROR VALUES
  const [errors, setErrors] = React.useState({
    email: "",
    name: "",
    password: "",
    conf_password: "",
  });

  // THIS IS A SINGLE METHOD TO HANDLE INPUT CHANGE
  const handleChange = (e) => {
    // SETTING CURRENT INPUT VALUE
    setInputs({ ...inputs, [e.target.name]: e.target.value });

    if (e.target.name === "conf_password")
      setErrors({
        ...errors,
        conf_password:
          inputs.password !== e.target.value ? "Password not matched" : "",
      });
    else setErrors({ ...errors, [e.target.name]: validate(e.target) });
  };

  // METHOD TO HANDLE FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();
    // API CALL......
  };

  // METHOD TO VALIDATE FORM WITH MEMOIZED VALUE
  const memoizeValidate = React.useMemo(() => {
    console.log("Memo call");
    return validateForm(inputs)(errors);
  }, [inputs, errors]);

  return (
    <>
      <div className={style.Container}>
        {/* I'VE USED SEMANTIC UI COMPONENTS */}
        <Form className={style.Form}>
          <Header as="h2">Singup</Header>
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
            {/* <label>Name</label> */}
            <Form.Input
              iconPosition="left"
              placeholder="Name"
              type="name"
              name="name"
              required
              error={
                errors.name !== "" && {
                  content: errors.name,
                  pointing: "below",
                }
              }
            >
              <Icon name="user" />
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
          <Form.Field className={style.InputField}>
            {/* <label>Password</label> */}
            <Form.Input
              iconPosition="left"
              placeholder="Confirm Password"
              required
              type="password"
              name="conf_password"
              onChange={(e) => handleChange(e)}
              error={
                errors.conf_password !== "" && {
                  content: errors.conf_password,
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
              SIGNUP
            </Button>
          </Form.Field>
        </Form>
      </div>
    </>
  );
};

export default SignupPage;
