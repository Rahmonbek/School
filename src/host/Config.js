import Global from "./Global";
import { httpRequest, idMaktab, url } from "./Host";

export const getNews = () => {
  var config = {
    url: `${url}/new/${idMaktab}`,
    method: "get",
  };
  return httpRequest(config);
};

export const getEvents = () => {
  var config = {
    url: `${url}/event/${idMaktab}`,
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

export const getStaffBySchool = () => {
  var config = {
    url: `${url}/staff-by-school/${Global.schoolId}`,
    method: "get",
  };
  return httpRequest(config);
};

export const getStaff = () => {
  var config = {
    url: `${url}/staff/${Global.staffId}`,
    method: "get",
  };
  return httpRequest(config);
};
