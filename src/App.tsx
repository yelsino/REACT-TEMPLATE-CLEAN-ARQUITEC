import store from '@/redux/store';
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import './App.scss';
import { AppContainer } from './styled-components';

const DashboardSuperFix = lazy(() => import('@/pages/Dashboard/DashboardSuperFix'));
const Login = lazy(() => import('@/pages/Login/Login'));

const App = () => {
  return (
    <React.StrictMode>
        <AppContainer className="App">
            <Suspense fallback={<div>Loading ...</div>}>
              <Provider store={store}>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path={`dashboard/*`} element={<DashboardSuperFix />} />
                  </Routes>
                </BrowserRouter>
              </Provider>
            </Suspense>
        </AppContainer>
    </React.StrictMode>
  );
};

export default App;
