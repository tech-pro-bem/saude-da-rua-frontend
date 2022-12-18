import api from '../../../services/api';

export const getReports = async (limit = 5) => {
  const params = { limit };
  const { data } = await api.get('/file/PDF', { params });
  return data;
};
