import React, { useEffect, useRef, useState } from 'react';
import styles from './menuDropdown.css';
import { EColor, Text } from '../../../../Text';
import ReactDOM from 'react-dom';
import { DropdownItemsList } from './DropdownItemsList';

interface IMenuDropdownProps {
  postId: string;
  onClose?: () => void;
  style?: React.CSSProperties;
}

export function MenuDropdown({ postId, onClose, style }: IMenuDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

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

  // typeguard
  const node = document.querySelector('#modal_root');

  if (!node) {
    return null;
  }

  return ReactDOM.createPortal((
    <div ref={ref} style={style} className={styles.menuDroopdown}>
      <DropdownItemsList postId={postId}/>
      <button className={styles.closeButton}>
        <Text mobileSize={12} size={14} color={EColor.gray66}>
          Закрыть
        </Text>
      </button>
    </div>
  ), node);
}
