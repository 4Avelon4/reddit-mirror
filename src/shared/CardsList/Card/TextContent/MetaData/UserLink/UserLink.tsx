import React from 'react';
import styles from './userlink.css';

interface IUserLinkProps {
  author: string;
  avatar: string;
}

export function UserLink({ author, avatar }: IUserLinkProps) {

  return (
    <div className={styles.userLink}>
      <img 
        className={styles.avatar} 
        src={avatar}
        alt="avatar"
      />
      <a href="#user-url" className={styles.username}>{author}</a>
    </div>
  );
}
