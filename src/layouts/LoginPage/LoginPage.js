import React from "react";
import { Input, Icon } from "semantic-ui-react";
import style from "./style.css";

//? THIS IS LOGIN PAGE ACCESSABLE BY ALL USERS
export const LoginPage = () => {

  return (
    <>
      <div className={style.Container}>
        <div className={style.Form}>
          <div className={style.InputField}>
            <Input iconPosition="left" placeholder="Username or Email">
              <Icon name="at" />
              <input type="email" name="email" required />
            </Input>
          </div>
          <div className={style.InputField}>
            <Input iconPosition="left" placeholder="Password">
              <Icon name="key" />
              <input type="password" name="password" required />
            </Input>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
