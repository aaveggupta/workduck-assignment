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
