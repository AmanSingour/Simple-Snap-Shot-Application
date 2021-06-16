import React from "react";
import { AuthContext } from "../../services/context";

import { ImageView, SearchBar } from "../../components";

import style from "./style.module.css";
import { useSelector } from "react-redux";
import { _routes } from "../../utils";
import history from "../../config/history";

//? THIS IS HOME PAGE ONLY ACCESSABLE BY AUTHENTICATED USERS
export const Home = () => {

  const photos = useSelector(state => state.photos)

  return (
    <>
      <div className={style.Container}>
        <AuthContext.Consumer>
          {(user) => user? <h1 className={style.Heading}>Welcome {user.username} to Snap-Shot!</h1>:
            history.push(_routes.LOGIN)
          }
        </AuthContext.Consumer>

        <SearchBar />
        <ImageView data={photos} />
      </div>
    </>
  );
};

export default Home;
