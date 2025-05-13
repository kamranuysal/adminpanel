import { routes } from "assets/constants/routes";
import AppLayout from "components/layout/AppLayout";
import LoadingComponent from "components/loading/LoadingComponent";
import Games from "pages/Games/Games";
import Users from "pages/Users/Users";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Pages = (): React.ReactElement => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <AppLayout>
        <Routes>
          <Route path={routes.index} element={<Navigate to={routes.users} />} />
          <Route path={routes.users} element={<Users />} />
          <Route path={routes.games} element={<Games />} />
        </Routes>
      </AppLayout>
    </Suspense>
  );
};

export default Pages;
