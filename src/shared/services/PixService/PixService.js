import api from '../api';

export async function GenerateQrCode() {
  let responseData = {
    key: '',
    error: false,
  };
  try {
    responseData.error = false;
    const { data } = await api.get('/pix');
    responseData.key = data.key;
  } catch (error) {
    responseData.error = true;
    responseData.key = null;
  } finally {
    return responseData;
  }
}
