import React from 'react';
import { MetaData } from './MetaData';
import styles from './textcontent.css';
import { Title } from './Title';

interface ITextContentProps {
  id: string;
  author: string;
  avatar: string;
  title: string;
  datePost: number;
}


export function TextContent({ id, author, avatar, title, datePost }: ITextContentProps) {

  return (
    <div className={styles.textContent}>
      <MetaData author={author} avatar={avatar} datePost={datePost} />
      <Title title={title} id={id} />
    </div>
  );
}
