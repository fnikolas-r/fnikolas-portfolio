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


export const getMyHighlightProject = async ()=> api.get(API_URL.TB_SHOWCASE_URI+"records").then(r=>r.data)
export const getMySkill = async  () => api.get(API_URL.TB_TECHSTACK_URI+"records?%28isHighlight%2Ceq%2C1%29&").then(r=>r.data)
export const getEduExp = async  () => api.get(API_URL.TB_EXPERIENCE_URI+"records?sort=-end&where=%28type%2Ceq%2CStudy%29&limit=25&shuffle=0&offset=0").then(r=>r.data)
export const getWorkExp = async  () => api.get(API_URL.TB_EXPERIENCE_URI+"records?sort=-end&where=%28type%2Ceq%2CWork%29&limit=25&shuffle=0&offset=0").then(r=>r.data)