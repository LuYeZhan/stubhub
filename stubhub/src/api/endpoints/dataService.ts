import { DETAILS_URLS, ID_TYPES, ID_URLS, URLS } from '../../constants/apiUrls';
import { makeRequestDetails, makeRequest, makeRequestById } from '../helpers/request';

export const getData = async (url:URLS) => {
  try {
    const response = await makeRequest(url);
    return response.data; 
  } catch (error) {
    console.error(`Error fetching ${url}`, error);
    throw error;
  }
};

export const getDataDetails = async ( url:DETAILS_URLS, id:number, idUrls:ID_URLS) => {
  try {
    const response = await makeRequestDetails(url, id, idUrls);
    return response.data
  } catch (error) {
    console.error(`Error fetching `, error)
  }
}

export const getDataById = async ( url:URLS, idTypes:ID_TYPES, id:number, status?:boolean) => {
  try {
    const response = await makeRequestById(url, idTypes, id, status);
    return response.data
  } catch (error) {
    console.error(`Error fetching `, error)
  }
}