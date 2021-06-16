import React from "react";
import { AuthContext } from "../../services/context";

import { ImageView, SearchBar } from "../../components";

import style from "./style.module.css";
import { useSelector } from "react-redux";
import history from "../../config/history";
import { _routes } from "../../utils";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

//? THIS IS HOME PAGE ONLY ACCESSABLE BY AUTHENTICATED USERS
export const Home = () => {
  const photos = useSelector((state) => state.photos);

  return (
    <>
      <div className={style.Container} data-testid="home">
        <div style={{width: '100%', textAlign: 'right !important'}}>
          <Link data-testid="logout-btn" size="small" to={_routes.LOGOUT}>
            LOGOUT
          </Link>
        </div>
        <AuthContext.Consumer>
          {(user) => (
            <h1 className={style.Heading}>
              Welcome {user.username} to Snap-Shot!
            </h1>
          )}
        </AuthContext.Consumer>

        <SearchBar />
        <ImageView data={photos} />
      </div>
    </>
  );
};

export default Home;
