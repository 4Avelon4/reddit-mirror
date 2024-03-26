import React, { useContext } from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import { useUserData } from '../../../hooks/useUserData';
// import { userContext } from '../../context/userContext';

export function SearchBlock() {
  // const { iconImg, name } = useContext(userContext);
  const { data, loading } = useUserData()

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading} />
    </div>
  );
}
