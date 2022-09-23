import App from 'App';
import EpisodeSeries from 'pages/EpisodePage/EpisodePage';
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
          <Route element={<EpisodeSeries />} path='/episodes/:id' />
        </Routes>
      </App>
    </HistoryRouter>
  );
};

export default AppRoutes;
