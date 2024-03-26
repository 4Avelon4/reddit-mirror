import React from 'react';
import styles from './title.css';
import { Link } from 'react-router-dom';

interface ITextContentProps {
  id: string;
  title: string;
}



export function Title({ id, title }: ITextContentProps) {
  return (
    <h2 className={styles.title}>
      <Link to={`/posts/${id}`} className={styles.postLink} state={id}>
        {title}
      </Link>
    </h2>
  );
}
