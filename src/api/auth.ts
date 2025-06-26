import axios from "networking/axios";
import webConfig, { defaultRoute } from "./webConfig";
import { ILoginData } from "pages/Login/interfaces";

export const login = (data: ILoginData) =>
  axios
    .post(defaultRoute + webConfig.auth.login, data)
    .then((responce) => responce && responce.data);
