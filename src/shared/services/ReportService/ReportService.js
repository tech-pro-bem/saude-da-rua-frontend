import api from '../../../services/api';

export const getReports = async (limit = 5) => {
  const params = { limit };
  const { data: reports } = await api.get('/file/PDF', { params });

  reports.sort((a, b) => {
    const aDate = new Date(a.createdAt);
    const bDate = new Date(b.createdAt);
    return bDate - aDate;
  });

  return reports;
};
