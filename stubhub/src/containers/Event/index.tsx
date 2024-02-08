import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDataById } from "../../api/endpoints/dataService";
import { ID_TYPES, URLS } from "../../constants/apiUrls";
import { CustomTr, EventContainer, TableWrapper, TicketList } from "./wrappers";
import TicketItem from "../../components/TicketItem";
import { Ticket } from "../../types/tickets.types";
import Button from "../../components/Button";
import { ButtonColors, LetterColors } from "../../constants/colors";

const Event = () => {
  const { eventId, eventName } = useParams<{ eventId: string; eventName: string }>();
  const navigate = useNavigate(); 

  const [eventData, setEventData] = useState<any[]>([]);
  useEffect(() => {
    const fetchEventData = async () => {
      if (!eventId) {
        console.error("Event ID is undefined");
        return;
      }

      try {
        const response = await getDataById(URLS.TICKETS, ID_TYPES.EVENT_ID, parseInt(eventId), true);
        setEventData(response);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEventData();
  }, [eventId]);

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const formattedEventName = eventName ? eventName.replace(/-/g, " ") : "Default Event Name";
  return (
    <EventContainer>
      <h2>{formattedEventName}</h2>
      { eventData.length === 0 ? (
        <p>No tickets left for this event.</p>
      ) : (
        <TicketList>
          <TableWrapper>
            <thead>
              <CustomTr>
                <th>Localidad</th>
                <th>Disponibles</th>
                <th>Precio por entrada</th>
                <th></th>
              </CustomTr>
            </thead>
            <tbody>
              {eventData.map((ticket: Ticket, index: number) => (
                <TicketItem
                  key={index}
                  quantity={ticket.quantity}
                  unit_price={ticket.unit_price}
                />
              ))}
            </tbody>
          </TableWrapper>
        </TicketList>
      )}
      <Button onClick={handleGoBack} color={LetterColors.secondary} label='Go back' bgColor={ButtonColors.grey}/>
    </EventContainer>
  );
};

export default Event;
