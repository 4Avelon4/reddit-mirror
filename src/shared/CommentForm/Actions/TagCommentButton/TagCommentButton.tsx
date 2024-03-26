import React from 'react';
import styles from './tagCommentButton.css';
import { EIcons, Icon } from '../../../Icon';

export function TagCommentButton() {
  return (
    <button className={styles.reportButton}>
      <Icon name={EIcons.tagComment} sizeWidth={20} sizeHeight={12} marginRight={7} />
    </button>
  );
}
