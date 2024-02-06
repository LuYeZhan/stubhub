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

export const getDataDetails = async (id:number, url:DETAILS_URLS) => {
  try {
    const response = await makeRequestDetails(id, url);
    return response
  } catch (error) {
    console.error(`Error fetching `, error)
  }
}

export const getDataById = async ( url:ID_URLS, idType:ID_TYPES, id:number, ) => {
  try {
    const response = await makeRequestById(url, idType, id);
    return response
  } catch (error) {
    console.error(`Error fetching `, error)
  }
}