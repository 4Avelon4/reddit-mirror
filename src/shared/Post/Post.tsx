import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';
import { PostHeader } from './PostHeader';
import { CommentList } from '../CommentsList';
import { CommentFormContainer } from '../CommentFormContainer';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { IPostData } from '../../store/posts/actions';

export function Post() {
  const {id} = useParams();
  const post = Object.values(useSelector<RootState, IPostData>(state => state.posts.data)).find((p) => p.id === id);
  
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        navigate('/posts');
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

  const placeholder = `Оставьте ваш комментарий`

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <PostHeader title={post.title} author={post.author} avatar={post.avatar} datePost={post.datePostUtc} score={post.score} />

      <div className={styles.content}>
        <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
        <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
        <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
      </div>

      <CommentFormContainer placeholder={placeholder} />

      <CommentList id={id} />
    </div>
  ), node);
}