import React, { ChangeEvent, useContext, useState } from 'react';
import styles from './replyButton.css';
import { EIcons, Icon } from '../../../../Icon';
import { ReplyComment } from './ReplyComment';
import { EColor, Text } from '../../../../Text';

interface IReplyButtonProps {
  id: string;
  author: string;
}

export function ReplyButton({ id, author }: IReplyButtonProps) {
  const [isCommentFormOpened, setIsCommentFormOpened] = useState(false);

  const handleItemClick = () => {
    console.log(id);
    setIsCommentFormOpened(true);
  }

  return (
    <div>
      <button className={styles.replyButton} onClick={() => {setIsCommentFormOpened(true); }} >
        <Icon name={EIcons.comments} tabletSizeWidth={14} tabletSizeHeight={14} marginRight={7} />
        <Text size={12} tabletSize={14} color={EColor.gray99}>Ответить</Text>
      </button>
        {isCommentFormOpened && (
          <ReplyComment onClose={() => { setIsCommentFormOpened(false); }} author={author} />
        )}
    </div>
  );
}
