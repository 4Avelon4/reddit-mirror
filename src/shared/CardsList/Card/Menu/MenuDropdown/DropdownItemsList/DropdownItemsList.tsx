import React from 'react';
import styles from './dropdownItemsList.css';
import classNames from 'classnames';
import { EColor, Text } from '../../../../../Text';
import { GenericList } from '../../../../../../utils/react/genericList';
import { generateId } from '../../../../../../utils/js/generateRandomIndex';
import { merge } from '../../../../../../utils/js/merge';
import { EIcons } from '../../../../../Icon';
import { Icon } from '../../../../../Icon';

interface IDropdownItemsList {
  postId: string;
}

const LIST = [
  {
    icon: <Icon name={EIcons.comments} tabletSizeWidth={14} tabletSizeHeight={14} />,
    children: <Text size={12} tabletSize={14} color={EColor.gray99}>Комментарии</Text>,
    As: 'li' as const,
    className: classNames(
      styles.menuItem,
      styles.menuItemMobileDisplayNone,
      styles.menuItemTabletDisplayFlex,
    ),
  },
  {
    className: classNames(
      styles.divider,
      styles.menuItemMobileDisplayNone,
      styles.menuItemTabletDisplayBlock,
    ),
  },
  {
    icon: <Icon name={EIcons.share} tabletSizeWidth={12} tabletSizeHeight={14} />,
    children: <Text size={12} tabletSize={14} color={EColor.gray99}>Поделиться</Text>,
    As: 'li' as const,
    className: classNames(
      styles.menuItem,
      styles.menuItemMobileDisplayNone,
      styles.menuItemTabletDisplayFlex,
    ),
  },
  {
    className: classNames(
      styles.divider,
      styles.menuItemMobileDisplayNone,
      styles.menuItemTabletDisplayBlock,
    ),
  },
  {
    icon: <Icon name={EIcons.block} sizeWidth={12} sizeHeight={12} tabletSizeWidth={14} tabletSizeHeight={14} />,
    children: <Text size={12} tabletSize={14} color={EColor.gray99}>Скрыть</Text>,
    As: 'li' as const,
    className: styles.menuItem,
  },
  {
    className: styles.divider,
  },
  {
    icon: <Icon name={EIcons.save} tabletSizeWidth={14} tabletSizeHeight={14} />,
    children: <Text size={12} tabletSize={14} color={EColor.gray99}>Сохранить</Text>,
    As: 'li' as const,
    className: classNames(
      styles.menuItem,
      styles.menuItemMobileDisplayNone,
      styles.menuItemTabletDisplayFlex,
    ),
  },
  {
    className: classNames(
      styles.divider,
      styles.menuItemMobileDisplayNone,
      styles.menuItemTabletDisplayBlock,
    ),
  },
  {
    icon: <Icon name={EIcons.warning} sizeWidth={14} sizeHeight={12} tabletSizeWidth={16} tabletSizeHeight={14} />,
    children: <Text size={12} tabletSize={14} color={EColor.gray99}>Пожаловаться</Text>,
    As: 'li' as const,
    className: styles.menuItem,
  },
].map(generateId);

export function DropdownItemsList({ postId }: IDropdownItemsList) {
  const [list, setList] = React.useState(LIST);

  const handleItemClick = () => {
    console.log(postId);
  }

  return (
    <ul className={styles.menuItemsList}>
      <GenericList list={list.map(merge({ onClick: handleItemClick }))} />
    </ul>
  );
}
