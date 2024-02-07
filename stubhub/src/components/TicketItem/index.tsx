import { Ticket } from "../../types/tickets.types";
import { ActionCell, LocationCell, PriceCell, QuantityCell, TicketRow } from "./wrappers";

const TicketItem = ({ quantity, unit_price}:Ticket) => {
  return (
    <TicketRow>
      <LocationCell>
        <span> </span>
      </LocationCell>
      <QuantityCell>{quantity}</QuantityCell>
      <PriceCell>
        <span>{unit_price} €</span>
      </PriceCell>
      <ActionCell>
        <a href="/">
          <span>Buy</span>
        </a>
      </ActionCell>
    </TicketRow>
  );
};

export default TicketItem;