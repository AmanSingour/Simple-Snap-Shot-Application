import axios from "axios";
import { SEARCH_SUCCESS } from "../../utils/data/__actionType";

const baseUrl =
  "https://api.flickr.com/services/rest/?method=flickr.photos.search";
const api_key = "&api_key=636e1481b4f3c446d26b8eb6ebfe7127";
const makeQuery = (query) =>
  `&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

const searchSuccess = (photo) => ({
  type: SEARCH_SUCCESS,
  payload: photo,
});

const doSearch = (query) => {
  return (dispatch) => {
    return axios
      .get(baseUrl + api_key + makeQuery(query))
      .then(({data}) => dispatch(searchSuccess(data.photos.photo)))
      .catch((e) => console.log("Search query error: " + e));
  };
};

export default doSearch;
