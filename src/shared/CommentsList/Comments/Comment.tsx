import React from 'react';
import styles from './comment.css';
import { KarmaCounter } from '../../CardsList/Card/Controls/KarmaCounter';
import { UserLink } from '../../CardsList/Card/TextContent/MetaData/UserLink';
import { createdPostComponent } from '../../../utils/js/calcPublicationDate';
import { Controls } from './Controls';

interface ICommentListProps {
  id: string;
  author: string;
  body: string;
  score: number;
  datePost: number;
}

export function Comment({ id, author, body, score, datePost }: ICommentListProps) {
  const datePostInMil = new Date(datePost * 1000);

  const avatar = 'https://cdn.dribbble.com/users/458522/avatars/mini/07b9b0f65924ef9cfffa9c7ad6b03fc7.png?1665138088';

  return (
    <li className={styles.comment}>
      <div className={styles.karmaWrapper}>
        <KarmaCounter score={score} />
      </div>
      <div className={styles.commentWrapper}>
        <div className={styles.metaData}>
          <UserLink author={author} avatar={avatar}/>
          <span className={styles.creatAt}>{createdPostComponent(datePostInMil)} назад</span>
        </div>
        <div className={styles.commentDescr}>{body}</div>
        <Controls id={id} author={author} />
      </div>
    </li>
  );
}
