import categoriesMocks from '../mocks/categoriesMock'

export type CategoryType = {
  id: number;
  name: string;
  description: string;
};

export const categories: CategoryType[] = categoriesMocks
