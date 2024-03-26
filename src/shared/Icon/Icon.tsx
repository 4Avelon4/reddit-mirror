import React from 'react';
import styles from './icon.css';
import classNames from 'classnames';
import {
  BlockIcon,
  CommentsIcon,
  MenuIcon,
  SaveIcon,
  ShareIcon,
  WarningIcon,
  IconAnon,
  TagCommentIcon,
  ImageCommentIcon
} from '../Icons';

export enum EIcons {
  block = 'BlockIcon',
  comments = 'CommentsIcon',
  menu = 'MenuIcon',
  save = 'SaveIcon',
  share = 'ShareIcon',
  warning = 'WarningIcon',
  anon = 'IconAnon',
  tagComment = 'TagCommentIcon',
  imageComment = 'ImageCommentIcon',
}


type TSizes = 12 | 14 | 16 | 18 | 20;
type TMargin = 5 | 7;

interface IIconsProps {
  name: EIcons;
  sizeWidth?: TSizes;
  sizeHeight?: TSizes;
  tabletSizeWidth?: TSizes;
  tabletSizeHeight?: TSizes;
  marginLeft?: TMargin;
  marginTop?: TMargin;
  marginRight?: TMargin;
  marginBottom?: TMargin;
}

export function Icon(props: IIconsProps) {
  const { 
    name,
    sizeWidth = 12,
    sizeHeight = 12,
    tabletSizeWidth,
    tabletSizeHeight,
    marginLeft,
    marginTop,
    marginRight,
    marginBottom,
  } = props;

  const components = {
    [EIcons.block]: <BlockIcon/>,
    [EIcons.comments]: <CommentsIcon/>,
    [EIcons.menu]: <MenuIcon/>,
    [EIcons.save]: <SaveIcon/>,
    [EIcons.share]: <ShareIcon/>,
    [EIcons.warning]: <WarningIcon/>,
    [EIcons.anon]: <IconAnon/>,
    [EIcons.tagComment]: <TagCommentIcon/>,
    [EIcons.imageComment]: <ImageCommentIcon/>,
  }

  return (
    <div
      className={classNames(
        styles['icon__wrapper'],
        styles[`svg_w${sizeWidth}`],
        styles[`svg_h${sizeHeight}`],
        { [styles[`svg_tabletW${tabletSizeWidth}`]]: tabletSizeWidth },
        { [styles[`svg_tabletH${tabletSizeHeight}`]]: tabletSizeHeight },
        styles[`svg_marginLeft${marginLeft}`],
        styles[`svg_marginTop${marginTop}`],
        styles[`svg_marginRight${marginRight}`],
        styles[`svg_marginBottom${marginBottom}`],

      )}
    >
      {components[name]}
    </div>
  );
}