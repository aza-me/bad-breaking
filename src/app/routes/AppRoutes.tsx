import App from 'App';
import MainPage from 'pages/MainPage/MainPage';
import React from 'react';
import { Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import history from './history';

const AppRoutes: React.FC = () => {
  return (
    <HistoryRouter history={history}>
      <App>
        <Routes>
          <Route element={<MainPage />} path='/' />
        </Routes>
      </App>
    </HistoryRouter>
  );
};

export default AppRoutes;
