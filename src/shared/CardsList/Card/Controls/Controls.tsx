import React from 'react';
import { Actions } from './Actions';
import { CommentsButton } from './CommentsButton';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';

interface IControlsProps {
  score: number;
}

export function Controls({ score }: IControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter score={score}/>
      <CommentsButton/>
      <Actions/>
    </div>
  );
}
