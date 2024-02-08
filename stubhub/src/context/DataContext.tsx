import { createContext, useState, useEffect } from 'react';
import { getData } from '../api/endpoints/dataService';
import { URLS } from '../constants/apiUrls';
import { DataContextType, DataProviderProps, initialData } from '../types/context.types';
import { UserType } from '../types/users.type';
import { EventType } from '../types/events.types';
import { CategoryType } from '../types/categories.types';

export const DataContext = createContext<DataContextType>(initialData);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<UserType[][]>([]);
  const [events, setEvents] = useState<EventType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [usersData, eventData, categoryData] = await Promise.all([
          getData(URLS.USERS),
          getData(URLS.EVENTS),
          getData(URLS.CATEGORIES),
        ]);
        setUsers(usersData);
        setEvents(eventData);
        setCategories(categoryData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllData();
  }, []);


  const contextValue: DataContextType = {
    users,
    categories,
    events,
    user,
    setUser,
    isUserLoggedIn, 
    setIsUserLoggedIn, 
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};
