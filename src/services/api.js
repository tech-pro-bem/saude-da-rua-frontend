import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://saude.thalles.me',
});

export default instance;
