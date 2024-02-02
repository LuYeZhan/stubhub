import axios from 'axios';
import { Urls, DetailsUrls, IdUrls, IdTypes } from '../../constants/apiUrls';

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const makeRequest = (url:Urls) => {
  return axios.get(`${baseURL}/${url}`);
};

export const makeRequestDetails = (id:number, url: DetailsUrls) => {
  return axios.get(`${baseURL}/${id}/${url}`);
}

export const makeRequestById = (url: IdUrls, idType: IdTypes, id:number) => {
  return axios.get(`${baseURL}/${url}?${idType}=${id}`)
}