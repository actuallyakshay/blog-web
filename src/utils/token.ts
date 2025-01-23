import { deleteCookie, getCookie, setCookie } from "cookies-next";

export const getToken = () => {
  return getCookie("token");
};

export const setToken = (token: string) => {
  setCookie("token", token);
};

export const deleteToken = () => {
  deleteCookie("token");
};
