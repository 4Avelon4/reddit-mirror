import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

interface ICardProps {
  id: string;
  author: string;
  avatar: string;
  title: string;
  score: number;
  previewImg: string;
  datePost: number;
}

export function Card({ id, author, avatar, title, score, previewImg, datePost }: ICardProps) {
  return (
    <li className={styles.card}>
      <TextContent id={id} author={author} avatar={avatar} title={title} datePost={datePost} />
      <Preview previewImg={previewImg} />
      <Menu id={id}/>
      <Controls score={score} />
    </li>
  );
}
