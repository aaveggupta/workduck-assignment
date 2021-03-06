import axios from "axios";

const ACCESS_KEY = "tSYS6OK3hXbEKHXgIRLuRI2zwjCXYjdSGnyp-4pH8BE";

export const getPhotos = (noOfPhotos) => {
  return axios
    .get(
      `https://api.unsplash.com/photos/random/?count=${noOfPhotos}&client_id=${ACCESS_KEY}`
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return false;
    });
};

export const getPhotosFromSearch = (noOfPhotos, searchText) => {
  return axios
    .get(
      `https://api.unsplash.com//search/photos/?query=${searchText}&client_id=${ACCESS_KEY}&page=1&per_page=${noOfPhotos}`
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return false;
    });
};
