import axios from "axios";

export const url = "http://api.maktab.abrorjonaxmadov.uz";
export const idMaktab = "16";
export const user = "26";
export const httpRequest = (config) => {
  return axios({
    ...config,
  });
};
