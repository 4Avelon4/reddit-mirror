import React, { ChangeEvent, FormEvent, useContext, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState, updateComment } from '../../store/reducer';
import { CommentForm } from '../CommentForm/CommentForm';

interface ICommentFormData {
  placeholder?: string,
  autoFocus?: boolean,
}

export function CommentFormContainer({ placeholder, autoFocus = false }: ICommentFormData) {
  const value = useSelector<RootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    console.log(event.target.value);
    dispatch(updateComment(event.target.value));
  }

  function handleSubmit(event: FormEvent) {
    console.log('Форма отправлена!');
    event.preventDefault();
  }
  
  return (
    <CommentForm
      // value={value}
      // onChange={handleChange}
      // onSubmitForm={handleSubmit}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  );
}
