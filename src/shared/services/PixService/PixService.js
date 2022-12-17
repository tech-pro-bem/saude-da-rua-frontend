import api from '../../../services/api';

export async function getPixKey() {
  const response = await api.get('/pix');
  return response;
}
