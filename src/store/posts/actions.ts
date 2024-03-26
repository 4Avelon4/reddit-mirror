import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState, setErrorLoading, setLoading, setNextAfter } from "../reducer";
import axios from "axios";

export interface IPostDataContext {
  [N: string]: any;
}

export const POSTS_REQUEST = 'POSTS_REQUEST';
export type PostsRequestAction = {
  type: typeof POSTS_REQUEST;
}
export const postsRequest: ActionCreator<PostsRequestAction> = () => ({
  type: POSTS_REQUEST,
});

export interface IPostData {
  data?: IPostDataContext;
  kind?: string;
}

export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export type PostsRequestSuccessAction = {
  type: typeof POSTS_REQUEST_SUCCESS;
  data: IPostData;
}
export const postsRequestSuccess: ActionCreator<PostsRequestSuccessAction> = (data: IPostData) => ({
  type: POSTS_REQUEST_SUCCESS,
  data,
});

export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';
export type PostsRequestErrorAction = {
  type: typeof POSTS_REQUEST_ERROR;
  error: string;
}
export const postsRequestError: ActionCreator<PostsRequestErrorAction> = (error: string) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const postsRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const nextAfter = getState().nextAfter;
  const data = Object.values(getState().posts.data);

  async function load() {
    dispatch(setLoading(true));
    dispatch(setErrorLoading(''));

    try {
      const { data: { data: { after, children }}} = await axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
        headers: { Authorization: `bearer ${getState().token}` },
        params: {
          limit: 10,
          after: nextAfter,
        }
      });

      const postData = children.map(
        (item: { data: IPostDataContext }) => ({
          id: item.data.id,
          author: item.data.author,
          title: item.data.title,
          score: item.data.score,
          avatar: item.data.sr_detail.icon_img
            ? item.data.sr_detail.icon_img
            : 'https://cdn.dribbble.com/users/458522/avatars/mini/07b9b0f65924ef9cfffa9c7ad6b03fc7.png?1665138088',
          previewImg: item.data.preview
            ? item.data.preview.images?.[0].source.url.replace(
                /(\&amp\;)/g,
                '&'
              )
            : 'https://cdn.dribbble.com/users/1766978/screenshots/6652181/6-18_2x_4x.png?compress=1&resize=400x300&vertical=top',
            datePostUtc: item.data.created_utc,
        })
      );

      dispatch(setNextAfter(after));
      dispatch(postsRequestSuccess(data.concat(...postData)));
    } catch(error) {
      dispatch(setErrorLoading(String(error)));
      dispatch(postsRequestError(String(error)));
    };

    dispatch(setLoading(false));
  }

  load();
}