import React from 'react';
import styles from './actions.css';
import { TagCommentButton } from './TagCommentButton';
import { ImageCommentButton } from './ImageCommentButton';

export function Actions() {
  return (
    <ul className={styles.actions}>
      <li className={styles.actionsItem}>
        <TagCommentButton/>
      </li>
      <li className={styles.actionsItem}>
        <ImageCommentButton/>
      </li>
    </ul>
  );
}
