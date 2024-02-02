import { DetailsUrls, IdTypes, IdUrls, Urls } from '../../constants/apiUrls';
import { makeRequestDetails, makeRequest, makeRequestById } from '../helpers/request';

export const getData = async (url:Urls) => {
  try {
    const response = await makeRequest(url);
    return response; 
  } catch (error) {
    console.error(`Error fetching ${url}`, error);
    throw error;
  }
};

export const getDataDetails = async (id:number, url:DetailsUrls) => {
  try {
    const response = await makeRequestDetails(id, url);
    return response
  } catch (error) {
    console.error(`Error fetching `, error)
  }
}

export const getDataById = async ( url:IdUrls, idType:IdTypes, id:number, ) => {
  try {
    const response = await makeRequestById(url, idType, id);
    return response
  } catch (error) {
    console.error(`Error fetching `, error)
  }
}