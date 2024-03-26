import React, { useEffect, useRef } from 'react';
import { Card } from './Card/Card';
import styles from './cardslist.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { IPostData, postsRequestAsync } from '../../store/posts/actions';
import { Outlet } from 'react-router-dom';

export interface IPostDataContext {
  [N: string]: any;
}

let loadCount = 0;
const loadCountLimit = 3;

export function CardsList() {
  const dispatch = useDispatch<any>();
  const posts = Object.values(useSelector<RootState, IPostData>(state => state.posts.data));

  if (!posts) {
    return null;
  }

  const bottomOfList = useRef<HTMLDivElement>(null);

  const loading = useSelector<RootState, boolean>(state => state.loading);
  const errorLoading = useSelector<RootState, string>(state => state.errorLoading);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && loadCount < loadCountLimit) {
        dispatch(postsRequestAsync())
        loadCount++;
      }
      
    }, {
      rootMargin: '10px',
    });

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }
    
    return() => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    }
  }, [bottomOfList.current]);

  function handleClick() {
    loadCount = 1;
    dispatch(postsRequestAsync())
  }

  return (
    <ul className={styles.cardsList}>
        {posts.length === 0 && !loading && !errorLoading && (
          <div role='alert' style={{ textAlign: 'center' }}>Нет ни одного поста</div>
        )}

        {posts && posts.map((posts: IPostDataContext) => (
          <Card 
          key={posts.id}
          title={posts.title}
          id={posts.id}
          author={posts.author}
          avatar={posts.avatar}
          score={posts.score}
          previewImg={posts.previewImg}
          datePost={posts.datePostUtc} />
        ))}

        <div ref={bottomOfList} />

        {loadCount === loadCountLimit && (
          <div className={styles.buttonWrapper}>
            <button className={styles.button} onClick={handleClick}>Загрузить ещё</button>
          </div>
        )}

        {loading && (
          <div role='alert' style={{ textAlign: 'center' }}>Загрузка...</div>
        )}

        {errorLoading && (
          <div role='alert' style={{ textAlign: 'center' }}>{errorLoading}</div>
        )}

        <Outlet/>
    </ul>
  );
}
