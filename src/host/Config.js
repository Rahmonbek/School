import Global from "./Global";
import { httpRequest, idMaktab, url } from "./Host";

export const getNews = () => {
  var config = {
    url: `${url}/new/${idMaktab}`,
    method: "get",
  };
  return httpRequest(config);
};

export const createParent = (config) => {
  console.log(config);
  var configs = {
    url: `${url}/parent/`,
    method: "post",
    data: config,
  };
  return httpRequest(configs);
};

export const getClasses = () => {
  var config = {
    url: `${url}/class/`,
    method: "get",
  };
  return httpRequest(config);
};
