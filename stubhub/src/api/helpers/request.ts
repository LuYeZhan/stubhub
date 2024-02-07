import axios from 'axios';
import { URLS, DETAILS_URLS, ID_URLS, ID_TYPES } from '../../constants/apiUrls';

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const makeRequest = (url:URLS) => {
  return axios.get(`${baseURL}/${url}`);
};

export const makeRequestDetails = ( url: DETAILS_URLS, id:number, idUrls:ID_URLS) => {
  return axios.get(`${baseURL}/${url}/${id}/${idUrls}`);
}

export const makeRequestById = (url: URLS, idType: ID_TYPES, id: number, status?: boolean) => {
  let requestUrl = `${baseURL}/${url}?${idType}=${id}`;
  if (status !== undefined) {
    requestUrl += `&status=${status}`;
  }  
  return axios.get(requestUrl)
};
