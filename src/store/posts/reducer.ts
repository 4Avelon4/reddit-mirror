import { Reducer } from "react";
import { PostsRequestAction, PostsRequestSuccessAction, PostsRequestErrorAction, POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS, IPostData } from "./actions";

export type PostsState = {
  loading: boolean;
  error: string;
  data: IPostData;
}

type MyAction = PostsRequestAction
  | PostsRequestSuccessAction
  | PostsRequestErrorAction;

export const postsReducer: Reducer<PostsState, MyAction> = (state, action) => {
  switch (action.type) {
    case POSTS_REQUEST:{
      return {
        ...state,
        loading: true,
      };
    }
    case POSTS_REQUEST_ERROR:{
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    case POSTS_REQUEST_SUCCESS:{
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