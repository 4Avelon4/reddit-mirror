import React from 'react';
import { usePostsComments } from '../../hooks/usePostsComments';
import { Comment } from './Comments';

interface ICommentListProps {
  id?: string;
}

interface ICommentsData {
  id: string,
  author: string,
  body: string,
  score: number;
  created_utc: number,
}


export function CommentList({ id }: ICommentListProps) {
  const [comments] = usePostsComments(id);

  return (
    <ul>
      {comments && comments.map((comments: ICommentsData) => (
          <Comment 
            key={comments.id}
            id={comments.id}
            author={comments.author}
            body={comments.body}
            score={comments.score}
            datePost={comments.created_utc} 
          />
        ))}
    </ul>
  );
}
