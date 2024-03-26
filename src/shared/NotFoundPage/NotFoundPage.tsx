import React from 'react';
import styles from './notFoundPage.css';

interface NotFoundPage {
  children?: React.ReactNode;
}

export function NotFoundPage({ children }: NotFoundPage) {
  return (
    <div className={styles.notFoundPage}>
      {children}
      <div>404 - страница не найдена</div>
    </div>
  );
}
