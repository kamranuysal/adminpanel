import axios from "networking/axios";
import webConfig, { defaultRoute } from "./webConfig";

export const getUsers = (
  page: number,
  limit: number,
  phoneNumber: string,
  name: string,
  email: string
) =>
  axios
    .get(
      defaultRoute +
        webConfig.users.getUsers +
        `?page=${page}&limit=${limit}&phoneNumber=${phoneNumber}&name=${name}&email=${email}`
    )
    .then((response) => response && response.data);
