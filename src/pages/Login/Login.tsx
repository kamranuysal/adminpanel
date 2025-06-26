import React, { useState } from "react";

import { Stack } from "@mui/material";

import Button from "components/buttons/Button";
import { buttonTypes } from "components/buttons/constants/buttonTypes";
import InputPlain from "components/inputs/InputPlain";
import LoadingComponent from "components/loading/LoadingComponent";
// import { useLogin } from "pages/Login/hooks/useLogin";
import { useLoginStyles } from "pages/Login/styles";
import { login } from "api/auth";
import { useNavigate } from "react-router-dom";
import { routes } from "assets/constants/routes";
import { sessionStatuses } from "assets/constants/sessionStatuses";
import Auth from "store/actions/AuthActions";
import { useDispatch } from "react-redux";

const Login = (): React.ReactElement => {
  const classes = useLoginStyles();

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const auth = new Auth(useDispatch());

  const onSubmit = async () => {
    setLoading(true);

    try {
      const responce = await login(loginData);

      if (responce) {
        localStorage.setItem("token", responce.jwtToken);

        auth.setSessionStatus(sessionStatuses.active);
        navigate(routes.users);
      }
    } catch (error) {
      console.error("Login falid. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <Stack spacing={2}>
        <>
          <InputPlain
            label="Username"
            onChange={(value) => {
              setLoginData({
                ...loginData,
                username: value,
              });
            }}
            value={loginData.username}
            className={classes.textField}
          />
          <InputPlain
            type="password"
            label="Password"
            onChange={(value) => {
              setLoginData({
                ...loginData,
                password: value,
              });
            }}
            value={loginData.password}
            className={classes.textField}
          />
        </>

        <Button
          disabled={!loginData.username || !loginData.password}
          buttonType={buttonTypes.info}
          onClick={onSubmit}
          variant="contained"
        >
          Log in
        </Button>
      </Stack>
    </>
  );
};

export default Login;
