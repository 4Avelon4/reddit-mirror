import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

type IPostsCommentsData = string | undefined;

interface ICommentsData {
  id: string,
  author: string,
  body: string,
  score: number;
  created_utc: number,
}

export function usePostsComments(postId: IPostsCommentsData) {
  const token = useSelector<RootState, string>(state => state.token);
  const [comments, setComments] = useState<ICommentsData[]>([]);

  useEffect(() => {
    if (token) {
      axios.get(`https://oauth.reddit.com/comments/${postId}`, {
        headers: { 
          Authorization: `bearer ${token}`,
        }
      })
      .then((res) => {
        const commentsData = res.data[1].data.children.map(
          (item: { data: ICommentsData }) => ({
            id: item.data.id,
            author: item.data.author,
            body: item.data.body,
            score: item.data.score,
            created_utc: item.data.created_utc,
          })
        );
        setComments(commentsData);
      })
      .catch(console.log);
    }
  }, [token]);

  return [comments];
}