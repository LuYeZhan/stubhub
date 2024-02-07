import purchasesMock from '../mocks/purchasesMock'

export type Purchase = {
  buyerId: number;
  ticketId: number;
  id: number;
  date: string;
};

export const purchases: Purchase[] = purchasesMock
