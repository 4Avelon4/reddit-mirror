import React, { useEffect, useRef } from 'react';
import styles from './postHeader.css';
import { KarmaCounter } from '../../CardsList/Card/Controls/KarmaCounter';
import { MetaData } from '../../CardsList/Card/TextContent/MetaData';

interface IPostProps {
  title: string;
  author: string;
  avatar: string;
  datePost: number;
  score: number;
}

export function PostHeader({ title, author, avatar, datePost, score}: IPostProps) {
  return (
    <div className={styles.postControls}>
      <div className={styles.marginRight}>
        <KarmaCounter score={score} />
      </div>
      <div>
        <h2>{title}</h2>
        <MetaData author={author} avatar={avatar} datePost={datePost} />
      </div>
    </div>
  )  
}