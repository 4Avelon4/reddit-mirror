import React, { useEffect, useRef } from 'react';
import styles from './replyComment.css';
import { CommentForm } from '../../../../../CommentForm';

interface ICommentsData {
  author: string,
  onClose?: () => void;
}

export function ReplyComment({ author, onClose }: ICommentsData) {
  const ref = useRef<HTMLDivElement>(null);

  const placeholder = `Ответить пользователю ${author}`

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        onClose?.();
      }
    }

    document.addEventListener('click', handleClick);

    return() => {
      document.removeEventListener('click', handleClick);
    }
  }, []);
  
  const node = document.querySelector('#modal_root');

  if (!node) {
    return null;
  }


  return (
    <div ref={ref} className={styles.replyComment}>
      <CommentForm placeholder={placeholder} autoFocus={true} />
    </div>
  );
}
