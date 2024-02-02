import categoriesMocks from '../mocks/categoriesMock'

export type Category = {
  id: number;
  name: string;
  description: string;
};

export const categories: Category[] = categoriesMocks
