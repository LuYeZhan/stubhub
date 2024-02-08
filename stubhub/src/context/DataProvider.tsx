import { createContext, useState, useEffect } from 'react';
import { getData } from '../api/endpoints/dataService';
import { URLS } from '../constants/apiUrls';
import { DataContextType, DataProviderProps, initialData } from '../types/context.types';
import { UserType } from '../types/users.type';
import { EventType } from '../types/events.types';
import { CategoryType } from '../types/categories.types';

export const DataContext = createContext<DataContextType>(initialData);

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType[][]>([]);
  const [events, setEvents] = useState<EventType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [userData, eventData, categoryData] = await Promise.all([
          getData(URLS.USERS),
          getData(URLS.EVENTS),
          getData(URLS.CATEGORIES),
        ]);
        setUser(userData);
        setEvents(eventData);
        setCategories(categoryData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllData();
  }, []);

  return (
    <DataContext.Provider value={{ user, events, categories }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
