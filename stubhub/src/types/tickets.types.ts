import ticketsMock from "../api/mocks/ticketsMock";

export type Ticket = {
  sellerId: number;
  eventId: number;
  id: number;
  quantity: number;
  unit_price: number;
  status: boolean;
};

export const tickets: Ticket[] = ticketsMock
