import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3333/api'
});

export default class DevsService {

  async createDev(dev) {
    const response = await api.post('/devs', dev);

    return response.data;
  }

  async getAllDevs() {
    const response = await api.get('/devs');

    return response.data;
  }

}