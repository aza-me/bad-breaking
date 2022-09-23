import axios from 'axios';

const getBaseUrl = () => {
  switch (window.location.hostname) {
    default:
      return 'https://www.breakingbadapi.com/api/';
  }
};

const instance = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
