import React from "react";
import { Icon, Button, Form, Header, Message } from "semantic-ui-react";
import style from "./style.module.css";

import { validateForm, validateInputs as validate } from "../../services";
import { _routes } from "../../utils";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { doSignup } from "../../services/actions";

const initialInput = {
  email: "",
  name: "",
  password: "",
  conf_password: "",
}

const initialErrors = {
  email: "",
  name: "",
  password: "",
  conf_password: "",
}

// THIS IS Signup PAGE ACCESSABLE BY ALL USERS
export const SignupPage = () => {
  // SINGLE STATE TO STORE INPUT VALUES
  const [inputs, setInputs] = React.useState(initialInput);

  // SINGLE STATE TO STORE INPUT ERROR VALUES
  const [errors, setErrors] = React.useState(initialErrors);

  // TO STORE API CALL RESPONSE
  const [res, setRes] = React.useState({});

  // REDUX DISPATCH
  const dispatch = useDispatch();

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
    var { conf_password, ...newUser } = inputs;
    setRes(dispatch(doSignup(newUser)));
  };


  return (
    <>
      <div className={style.Container} data-testid="signup">
        {/* I'VE USED SEMANTIC UI COMPONENTS */}
        <Form
          className={style.Form}
          success={res && res.status === 201}
          error={res && res.status !== 201}
        >
          <Header as="h2">Singup</Header>
          <br />
          {res.message && (
            <Message
              success={res && res.status === 201}
              error={res && res.status !== 201}
              header={res.status !== 201? 'Action Forbidden' : 'Success'}
              content={res.message}
            />
          )}
          <Form.Field className={style.InputField}>
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
              <input required onBlur={(e) => handleChange(e)}  onChange={(e) => handleChange(e)} />
            </Form.Input>
          </Form.Field>
          <Form.Field className={style.InputField}>
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
              <input required onBlur={(e) => handleChange(e)}  onChange={(e) => handleChange(e)} />
            </Form.Input>
          </Form.Field>
          <Form.Field className={style.InputField}>
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
          <Form.Field className={style.InputField}>
            <Form.Input
              iconPosition="left"
              placeholder="Confirm Password"
              required
              type="password"
              name="conf_password"
              onBlur={(e) => handleChange(e)} 
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
              disabled={validateForm(inputs)(errors)}
              positive
              onClick={(e) => handleSubmit(e)}
            >
              SIGNUP
            </Button>
          </Form.Field>
          <label>
            Already have an account?<Link to={_routes.LOGIN}>Login</Link>
          </label>
        </Form>
      </div>
    </>
  );
};

export default SignupPage;
