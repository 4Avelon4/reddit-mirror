import React from 'react';
import styles from './shareButton.css';
import { EIcons, Icon } from '../../../../Icon';
import { EColor, Text } from '../../../../Text';

interface IShareButtonProps {
  id: string;
}

export function ShareButton({ id }: IShareButtonProps) {
  const handleItemClick = () => {
    console.log(id);
  }

  return (
    <button className={styles.shareButton} onClick={handleItemClick}>
      <Icon name={EIcons.share} tabletSizeWidth={12} tabletSizeHeight={14} marginRight={7} />
      <Text size={12} tabletSize={14} color={EColor.gray99}>Поделиться</Text>
    </button>
  );
}
