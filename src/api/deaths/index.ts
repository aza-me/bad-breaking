import instance from 'api/instance';
import { GetAllDeaths, GetDeathsById } from './types';

export const getAllDeaths: GetAllDeaths = (data) => {
  return instance.get('/deaths', {
    data,
  });
};

export const getDeathsById: GetDeathsById = (id) => {
  return instance.get(`/deaths/${id}`);
};
