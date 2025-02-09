import axios from "axios";
import { API_URL } from "../constants";


const api = axios.create();

api.interceptors.request.use(
  (config) => {
    config.headers["xc-token"] = import.meta.env.VITE_NOCODB_API_KEY
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const BASE_URI = import.meta.env.VITE_NOCODB_BASE_URI
export const getMyHighlightProject = async ()=> api.post(BASE_URI, {tablename: API_URL.TB_SHOWCASE_URI}).then(r=>r.data)
export const getMySkill = async  () => api.post(BASE_URI, {tablename: API_URL.TB_TECHSTACK_URI,query:"%28isHighlight%2Ceq%2C1%29&"}).then(r=>r.data)
export const getEduExp = async  () => api.post(BASE_URI, {tablename: API_URL.TB_EXPERIENCE_URI,query:"sort=-end&where=%28type%2Ceq%2CStudy%29&limit=25&shuffle=0&offset=0"}).then(r=>r.data)
export const getWorkExp = async  () => api.post(BASE_URI, {tablename: API_URL.TB_EXPERIENCE_URI,query:"sort=-end&where=%28type%2Ceq%2CWork%29&limit=25&shuffle=0&offset=0"}).then(r=>r.data)