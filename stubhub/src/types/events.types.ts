import eventsMock from '../api/mocks/eventsMock'

export type EventType = {
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

export const events: EventType[] = eventsMock
