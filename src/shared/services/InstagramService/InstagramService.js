import axios from 'axios';

const { REACT_APP_IG_TOKEN, REACT_APP_IG_BASE_URL: baseURL } = process.env;

const DEFAULT_FIELDS = ['id', 'media_type', 'media_url'];

export default class InstagramClient {
  static client = axios.create({ baseURL });

  static async getSelfUser() {
    const params = {
      access_token: REACT_APP_IG_TOKEN,
      fields: 'account_type,id,media_count,username',
    };

    const { data: user } = await this.client.get('/me', params);

    return user;
  }

  static async getLastMedia(n, fields = DEFAULT_FIELDS) {
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

  static async getLastPictures(n, fields = DEFAULT_FIELDS) {
    const pictureFields = fields.includes('media_type')
      ? fields
      : [...fields, 'media_type'];
    const lastMedia = await this.getLastMedia(null, pictureFields);
    const lastPictures = lastMedia.filter((m) => m.media_type === 'IMAGE');

    return n ? lastPictures.slice(0, n) : lastPictures;
  }
}
