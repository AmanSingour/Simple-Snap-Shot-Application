import React from "react";
import { AuthContext } from "../../services/context";

import { ImageView, SearchBar } from "../../components";

import style from "./style.module.css";

//? THIS IS HOME PAGE ONLY ACCESSABLE BY AUTHENTICATED USERS
export const Home = () => {
  return (
    <>
      <div className={style.Container}>
        <AuthContext.Consumer>
          {(user) => <h1>Welcome {user.username} to Snap-Shot!</h1>}
        </AuthContext.Consumer>

        <SearchBar />
        <ImageView />
      </div>
    </>
  );
};

export default Home;
