import { Urls } from '../../constants/apiUrls';
import { makeRequest } from '../helpers/request';

export const getData = async (url:Urls) => {
  try {
    const response = await makeRequest(url);
    return response; 
  } catch (error) {
    console.error(`Error fetching ${url}`, error);
    throw error;
  }
};