const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const defaultRoute = SERVER_URL + "/api";

const webConfig = {
  auth: {
    login: "/login",
  },
  users: {
    getUsers: "/users",
  },
};

export default webConfig;
