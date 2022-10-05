import App from 'App';
import CharactersPage from 'pages/CharactersPage/CharactersPage';
import CurrentCharacter from 'pages/CurrentCharacter/CurrentCharacter';
import EpisodeSeries from 'pages/EpisodePage/EpisodePage';
import MainPage from 'pages/MainPage/MainPage';
import React from 'react';
import { Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import Header from 'shared/Header/Header';
import history from './history';

const AppRoutes: React.FC = () => {
  return (
    <HistoryRouter history={history}>
      <App>
        <Header />
        <Routes>
          <Route element={<MainPage />} path='/' />
          <Route element={<EpisodeSeries />} path='/episodes/:id' />
          <Route element={<CharactersPage />} path='/characters' />
          <Route element={<CurrentCharacter />} path='/characters/:name' />
        </Routes>
      </App>
    </HistoryRouter>
  );
};

export default AppRoutes;
