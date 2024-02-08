import { ReactNode } from "react";
import { CategoryType } from "./categories.types";
import { EventType } from "./events.types";
import { UserType } from "./users.type";

export interface DataContextType {
  user: UserType[][] ;
  categories: CategoryType[];
  events: EventType[];
}

export interface DataProviderProps {
  children: ReactNode;
}

export const initialData: DataContextType = {
  user: [],
  categories: [],
  events: [],
};