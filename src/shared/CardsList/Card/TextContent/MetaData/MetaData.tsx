import React from 'react';
import { CreateAt } from './CreateAt';
import styles from './metadata.css';
import { UserLink } from './UserLink';

interface IMetaDataProps {
  author: string;
  avatar: string;
  datePost: number;
}

export function MetaData({ author, avatar, datePost }: IMetaDataProps) {
  return (
    <div className={styles.metaData}>
      <UserLink author={author} avatar={avatar} />
      <CreateAt datePost={datePost} />
    </div>
  );
}
