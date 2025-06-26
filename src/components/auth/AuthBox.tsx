import { allowedRoutes, routes } from "assets/constants/routes";
import { sessionStatuses } from "assets/constants/sessionStatuses";
import LoadingComponent from "components/loading/LoadingComponent";
import Pages from "navigation/Pages";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Auth from "store/actions/AuthActions";

export const logOut = (): void => {
  localStorage.removeItem("token");
  window.location.reload();
};

const AuthBox = () => {
  const authState = useSelector((state: any) => state.authReducer);

  const auth = new Auth(useDispatch());

  const location = useLocation();
  const navigate = useNavigate();

  const redirectIfUserIsNotAuthentificated = (pathname: string): any => {
    if (
      authState.sessionStatus === sessionStatuses.inactive &&
      Object.values(allowedRoutes).indexOf(pathname) === -1
    )
      return navigate(allowedRoutes.login);

    return null;
  };

  const redirectIfUserIsAlreadyAuthentificated = (pathname: string): any => {
    if (
      authState.sessionStatus === sessionStatuses.active &&
      Object.values(allowedRoutes).indexOf(pathname) >= 0
    )
      return navigate(routes.users);

    return null;
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      auth.setSessionStatus(sessionStatuses.active);
    } else {
      auth.setSessionStatus(sessionStatuses.inactive);
    }
  }, []);

  return (
    <div className="d-flex flex-grow-1">
      {redirectIfUserIsNotAuthentificated(location.pathname)}
      {redirectIfUserIsAlreadyAuthentificated(location.pathname)}
      {authState.sessionStatus !== sessionStatuses.start ? (
        <Pages />
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

export default AuthBox;
