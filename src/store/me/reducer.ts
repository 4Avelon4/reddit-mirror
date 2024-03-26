import { Reducer } from "react";
import { MeRequestAction, MeRequestSuccessAction, MeRequestErrorAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, IUserData } from "./actions";

export type MeState = {
  loading: boolean;
  error: string;
  data: IUserData;
}

type MyAction = MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction;

export const meReducer: Reducer<MeState, MyAction> = (state, action) => {
  switch (action.type) {
    case ME_REQUEST:{
      return {
        ...state,
        loading: true,
      };
    }
    case ME_REQUEST_ERROR:{
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    case ME_REQUEST_SUCCESS:{
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
}