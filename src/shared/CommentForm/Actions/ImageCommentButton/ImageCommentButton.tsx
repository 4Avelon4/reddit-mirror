import React from 'react';
import styles from './imageCommentButton.css';
import { EIcons, Icon } from '../../../Icon';

export function ImageCommentButton() {
  return (
    <button className={styles.reportButton}>
      <Icon name={EIcons.imageComment} sizeWidth={18} sizeHeight={18} marginRight={7} />
    </button>
  );
}
