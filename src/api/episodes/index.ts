import instance from 'api/instance';
import { GetAllEpisodes } from './types';

export const getAllEpisodes: GetAllEpisodes = (data) => {
  return instance.get('/episodes', {
    data,
  });
};
