import api from '../../../services/api';

export const getPixKey = async () => {
  const { data: pix } = await api.get('/pix');
  return pix;
};
