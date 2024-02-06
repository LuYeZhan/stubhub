import axios from 'axios';
import { URLS, DETAILS_URLS, ID_URLS, ID_TYPES } from '../../constants/apiUrls';

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const makeRequest = (url:URLS) => {
  return axios.get(`${baseURL}/${url}`);
};

export const makeRequestDetails = (id:number, url: DETAILS_URLS) => {
  return axios.get(`${baseURL}/${id}/${url}`);
}

export const makeRequestById = (url: ID_URLS, idType: ID_TYPES, id:number) => {
  return axios.get(`${baseURL}/${url}?${idType}=${id}`)
}