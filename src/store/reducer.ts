import { Action, ActionCreator, AnyAction, Reducer } from "redux";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from "./me/actions";
import { MeState, meReducer } from "./me/reducer";
import { POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS, PostsRequestAction, PostsRequestErrorAction, PostsRequestSuccessAction } from "./posts/actions";
import { PostsState, postsReducer } from "./posts/reducer";
import { useEffect } from "react";
import { ThunkAction } from "redux-thunk";

export type RootState = {
  commentText: string;
  token: string;
  me: MeState;
  posts: PostsState;
  loading: boolean;
  errorLoading: string;
  nextAfter: string;
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string,
}
export const updateComment: ActionCreator<UpdateCommentAction> = (text: string) => ({
  type: UPDATE_COMMENT,
  text,
});

const SET_TOKEN = 'SET_TOKEN';
type SetTokenAction = {
  type: typeof SET_TOKEN;
  token: string,
}
export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
  type: SET_TOKEN,
  token,
});

const SET_LOADING = 'SET_LOADING';
type SetLoadingAction = {
  type: typeof SET_LOADING;
  loading: boolean,
}
export const setLoading: ActionCreator<SetLoadingAction> = (loading: boolean) => ({
  type: SET_LOADING,
  loading,
});

const SET_ERROR_LOADING = 'SET_ERROR_LOADING';
type SetErrorLoadingAction = {
  type: typeof SET_ERROR_LOADING;
  errorLoading: string,
}
export const setErrorLoading: ActionCreator<SetErrorLoadingAction> = (errorLoading: string) => ({
  type: SET_ERROR_LOADING,
  errorLoading,
});

const SET_NEXT_AFTER = 'SET_NEXT_AFTER';
type SetNextAfterAction = {
  type: typeof SET_NEXT_AFTER;
  nextAfter: string,
}
export const setNextAfter: ActionCreator<SetNextAfterAction> = (nextAfter: string) => ({
  type: SET_NEXT_AFTER,
  nextAfter,
});

const initialState: RootState = {
  commentText: '',
  token: '',
  me: {
    loading: false,
    error: '',
    data: {},
  },
  posts: {
    loading: false,
    error: '',
    data: {},
  },
  loading: false,
  errorLoading: '',
  nextAfter: '',
}

type MyAction = UpdateCommentAction
  | SetTokenAction
  | SetLoadingAction
  | SetErrorLoadingAction
  | SetNextAfterAction
  | MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction
  | PostsRequestAction
  | PostsRequestSuccessAction
  | PostsRequestErrorAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:{
      return {
        ...state,
        token: action.token,
      };
    }
    case SET_LOADING:{
      return {
        ...state,
        loading: action.loading,
      };
    }
    case SET_ERROR_LOADING:{
      return {
        ...state,
        errorLoading: action.errorLoading,
      };
    }
    case SET_NEXT_AFTER:{
      return {
        ...state,
        nextAfter: action.nextAfter,
      };
    }
    case UPDATE_COMMENT:{
      return {
        ...state,
        commentText: action.text,
      };
    }
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR: {
      return {
        ...state,
        me: meReducer(state.me, action),
      }
    }
    case POSTS_REQUEST:
    case POSTS_REQUEST_SUCCESS:
    case POSTS_REQUEST_ERROR: {
        return {
          ...state,
          posts: postsReducer(state.posts, action),
        }
      }
    default: {
      return state;
    }
  }
}

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  useEffect(() => {
      if (window.__token__) {
          dispatch(setToken(window.__token__))
      }
  }, [getState().token])
}
