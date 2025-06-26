import { BrowserRouter } from "react-router-dom";
import { combineReducers } from "redux";
import { authReducer } from "store/reducers/AuthReducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

export const rootReducer = combineReducers({
  authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const Wrapper = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => (
  <BrowserRouter>
    <Provider store={store}>{children}</Provider>
  </BrowserRouter>
);
