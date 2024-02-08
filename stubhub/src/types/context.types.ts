import { ReactNode } from "react";
import { CategoryType } from "./categories.types";
import { EventType } from "./events.types";
import { UserType } from "./users.type";

export interface DataContextType {
  users: UserType[][] ;
  categories: CategoryType[];
  events: EventType[];
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: (value: boolean) => void;
  user: UserType | null;
  setUser: (value: UserType) => void; 
}

export interface DataProviderProps {
  children: ReactNode;
}

export const initialData: DataContextType = {
  users: [],
  categories: [],
  events: [],
  isUserLoggedIn: false,
  setIsUserLoggedIn: () => {},
  user: null,
  setUser: () => {}
};