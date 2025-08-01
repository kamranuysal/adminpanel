import { allowedRoutes, routes } from "assets/constants/routes";
import { sessionStatuses } from "assets/constants/sessionStatuses";
import AppLayout from "components/layout/AppLayout";
import AuthLayout from "components/layout/AuthLayout";
import LoadingComponent from "components/loading/LoadingComponent";
import Games from "pages/Games/Games";
import Login from "pages/Login/Login";
import Users from "pages/Users/Users";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

const Pages = (): React.ReactElement => {
  const authState = useSelector((state: any) => state.authReducer);

  return (
    <Suspense fallback={<LoadingComponent />}>
      {authState.sessionStatus === sessionStatuses.active && (
        <AppLayout>
          <Routes>
            <Route
              path={routes.index}
              element={<Navigate to={routes.users} />}
            />
            <Route path={routes.users} element={<Users />} />
            <Route path={routes.games} element={<Games />} />
          </Routes>
        </AppLayout>
      )}

      {authState.sessionStatus !== sessionStatuses.active && (
        <AuthLayout>
          <Routes>
            <Route
              path={routes.index}
              element={<Navigate to={allowedRoutes.login} />}
            />
            <Route path={allowedRoutes.login} element={<Login />} />
          </Routes>
        </AuthLayout>
      )}
    </Suspense>
  );
};

export default Pages;
