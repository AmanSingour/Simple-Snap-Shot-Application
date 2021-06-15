import React from "react";
import { Input, Label } from "semantic-ui-react";

import style from "./style.module.css";

import { doSearch } from "../../services/actions";
import { useDispatch } from "react-redux";
import { SEARCH_FAILD } from "../../utils/data/__actionType";

const labels = ["Sunset", "Mountain", "Bike", "Cat", "Bird"];

//? THIS IS SEARCH BAR COMPONENT...
export const SearchBar = () => {

  const [query, setQuery] = React.useState({
    loading: false,
    value: "",
  });

  // REDUX DISPATCH METHOD
  const dispatch = useDispatch()

  // THIS METHOD IS RESPONSIBLE FOR ON CHANGE QUERY
  const handleChange = async (e) => {
    if(e.target.value==='' || e.target.value === null)
    return dispatch({type: SEARCH_FAILD})
    setQuery({ value: e.target.value, loading: true });
    await dispatch(doSearch(e.target.value))
    setQuery({ ...query, loading: false });
  };

  // THIS METHOD IS RESPONSIBLE FOR ON CLICK LABEL
  const handleClick = (e, label) => {
    e.preventDefault();
    document.getElementById("search").focus();
    document.getElementById("search").value = label;
    setQuery({ ...query, value: label });
    dispatch(doSearch(label));

  };

  return (
    <>
      <div className={style.Container}>
        <Input
          id="search"
          fluid
          loading={query.loading}
          icon="search"
          placeholder="Search..."
          onChange={(e) => handleChange(e)}
        />
        <div className={style.Labels}>
          {labels.map((label) => (
            <Label
              key={label}
              size="large"
              as="a"
              className={style.Label}
              onClick={(e) => handleClick(e, label)}
            >
              {label}
            </Label>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
