import React from 'react';
import styles from './reportButton.css';
import { EIcons, Icon } from '../../../../Icon';
import { EColor, Text } from '../../../../Text';

interface IReportButtonProps {
  id: string;
}

export function ReportButton({ id }: IReportButtonProps) {
  const handleItemClick = () => {
    console.log(id);
  }

  return (
    <button className={styles.reportButton} onClick={handleItemClick}>
      <Icon name={EIcons.warning} sizeWidth={14} sizeHeight={12} tabletSizeWidth={16} tabletSizeHeight={14} marginRight={7} />
      <Text size={12} tabletSize={14} color={EColor.gray99}>Пожаловаться</Text>
    </button>
  );
}
