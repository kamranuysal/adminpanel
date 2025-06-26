import { sessionStatuses } from "assets/constants/sessionStatuses";
import { updateObject } from "utils/Utils";
import { authTypes as TYPES } from "store/types/AuthTypes";

const initialState = {
  sessionStatus: sessionStatuses.start,
};

export const authReducer = (state = initialState, action): any => {
  switch (action.type) {
    case TYPES.SET_SESSION_STATUS:
      return updateObject(state, {
        sessionStatus: action.status,
      });
    default:
      return state;
  }
};
