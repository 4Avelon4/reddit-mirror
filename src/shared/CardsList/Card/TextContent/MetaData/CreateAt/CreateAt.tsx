import React from 'react';
import styles from './createat.css';
import { createdPostComponent } from '../../../../../../utils/js/calcPublicationDate';


interface IMetaDataProps {
  datePost: number;
}

export function CreateAt({ datePost }: IMetaDataProps) {
  const datePostInMil = new Date(datePost * 1000);

  return (
    <span className={styles.createAt}>
      <span className={styles.publishedLabel}>опубликовано</span>
      {createdPostComponent(datePostInMil)} назад
    </span>
  );
}
