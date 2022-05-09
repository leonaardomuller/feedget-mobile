import axios from "axios";

export const api = axios.create({ baseURL: 'http://10.1.1.25:3333' });
