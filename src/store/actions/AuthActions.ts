import { useCallback } from "react";
import { authTypes as TYPES } from "store/types/AuthTypes";

export default class Auth {
  dispatch: any = () => {};
  constructor(dispatch: any) {
    this.dispatch = dispatch;
  }

  setSessionStatus = useCallback(
    (status) =>
      this.dispatch({
        type: TYPES.SET_SESSION_STATUS,
        status,
      }),
    [this]
  );
}
