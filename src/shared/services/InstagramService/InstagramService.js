import axios from 'axios';

const { REACT_APP_IG_TOKEN, REACT_APP_IG_BASE_URL: baseURL } = process.env;

export default class InstagramClient {
  static client = axios.create({ baseURL });

  static async getLastMedia(n, fields = ['id', 'type', 'media_url']) {
    // media_url, permalink, media_type, caption
    const fieldsStringfied = fields.join(',');

    const params = {
      access_token: REACT_APP_IG_TOKEN,
      fields: fieldsStringfied,
    };

    const {
      data: { data: lastPics },
    } = await this.client.get('/me/media', { params });

    return n ? lastPics.slice(0, n) : lastPics;
  }
}
