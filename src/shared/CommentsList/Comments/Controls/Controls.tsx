import React from 'react';
import styles from './controls.css';
import { ReplyButton } from './ReplyButton';
import { ShareButton } from './ShareButton';
import { ReportButton } from './ReportButton';

interface ICommentControlsProps {
  id: string;
  author: string;
}

export function Controls({ id, author }: ICommentControlsProps) {
  return (
    <ul className={styles.controlsList}>
      <li className={styles.controlsItem}>
        <ReplyButton id={id} author={author} />
      </li>
      <li className={styles.controlsItem}>
        <ShareButton id={id} />
      </li>
      <li className={styles.controlsItem}>
        <ReportButton id ={id} />
      </li>
    </ul>
  );
}
