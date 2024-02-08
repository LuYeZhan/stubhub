import { ButtonColors } from "../../constants/colors";
import { Ticket } from "../../types/tickets.types";
import Button from "../Button";
import { ActionCell, LocationCell, PriceCell, QuantityCell, TicketRow } from "./wrappers";

const TicketItem = ({ quantity, unit_price}:Ticket) => {
  return (
    <TicketRow>
      <LocationCell>
        <h3>Ticket name</h3>
        <p>Sector: ###</p>
        <p>Row: ##</p>
      </LocationCell>
      <QuantityCell>{quantity}</QuantityCell>
      <PriceCell>
        <span>{unit_price} €</span>
      </PriceCell>
      <ActionCell>
      <Button label="Buy" color={ButtonColors.white} bgColor={ButtonColors.green}/>
      </ActionCell>
    </TicketRow>
  );
};

export default TicketItem;