import axios from 'axios';

import api from '../../../services/api';

const baseURL = 'https://graph.instagram.com/v13.0/';

const DEFAULT_FIELDS = ['id', 'media_type', 'media_url'];

export default class InstagramClient {
  static client = axios.create({ baseURL });

  static async getToken() {
    const {
      data: { token },
    } = await api.get('/get/instagram-token');
    return token;
  }

  static async getSelfUser() {
    const token = await this.getToken();

    const params = {
      access_token: token,
      fields: 'account_type,id,media_count,username',
    };

    const { data: user } = await this.client.get('/me', { params });

    return user;
  }

  static async getLastMedia(limit, fields = DEFAULT_FIELDS) {
    const token = await this.getToken();

    const fieldsStringfied = fields.join(',');

    const params = {
      access_token: token,
      fields: fieldsStringfied,
    };

    const {
      data: { data: lastPics },
    } = await this.client.get('/me/media', { params });

    return limit ? lastPics.slice(0, limit) : lastPics;
  }

  static async getLastPictures(limit, fields = DEFAULT_FIELDS) {
    const pictureFields = fields.includes('media_type')
      ? fields
      : [...fields, 'media_type'];
    const lastMedia = await this.getLastMedia(null, pictureFields);
    const lastPictures = lastMedia.filter((m) => m.media_type === 'IMAGE');

    return limit ? lastPictures.slice(0, limit) : lastPictures;
  }
}
