import React, { useEffect, useState } from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { applyMiddleware, createStore } from 'redux';
import { Provider, useDispatch } from 'react-redux';
import { rootReducer, saveToken } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/router';


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

function AppComponent() {
  const dispatch = useDispatch<any>();
  dispatch(saveToken());

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
      <Layout>
        {mounted && (
          <>
            <Header/>
            <Content>
              <BrowserRouter>
                <Router/>
              </BrowserRouter>
              {/* <RouterProvider router={router} /> */}
            </Content>
          </>
        )}
      </Layout>
  );
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
));