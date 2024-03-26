import React, { useEffect, useRef } from 'react';
import styles from './commentForm.css';
import { Actions } from './Actions';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, updateComment } from '../../store/reducer';

interface ICommentFormData {
  placeholder?: string,
  autoFocus?: boolean,
}

interface ICommentFormikValue {
  text: string,
}

interface ISetSubmitting {
  setSubmitting: (isSubmitting: boolean) => void
}

export function CommentForm({ placeholder, autoFocus = false }: ICommentFormData) {
  const innerRef = useRef<HTMLTextAreaElement>(null);

  const value = useSelector<RootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  useEffect(() => {
  if (autoFocus) {
    innerRef.current?.focus();
  }
  }, []);

  const initialValues: ICommentFormikValue = {
    text: value,
  }

  const validateForm = (values: ICommentFormikValue) => {
    const errors = {};

    dispatch(updateComment(values.text));

    if (values.text.length <= 3) {
      return {
        ...errors,
        text: 'вверите больше 3-х символов'
      }
    }

    return errors;
  }

  const submitting = (values: ICommentFormikValue, { setSubmitting }: ISetSubmitting) => {
    dispatch(updateComment(''));
    innerRef.current!.value = '';
    alert('Форма отправлена!');
  }


  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={submitting}
      >
        <Form className={styles.form}>
          <Field className={styles.input} type='text' name='text' as='textarea' innerRef={innerRef} placeholder={placeholder} />
          <ErrorMessage name='text' component='div' />
          <div className={styles.formActions}>
            <Actions/>
            <button className={styles.button} type='submit'>Комментировать</button>
          </div>
        </Form>
    </Formik>
  </div>
  );
}
