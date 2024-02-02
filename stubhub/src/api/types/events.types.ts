import eventsMock from '../mocks/eventsMock'

export type Event = {
  categoryId: number;
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  thumbnailImageUrl: string;
  city: string;
  country: string;
  venueName: string;
};

export const events: Event[] = eventsMock
