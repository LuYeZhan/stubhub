import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataById } from "../../api/endpoints/dataService";
import { ID_TYPES, URLS } from "../../constants/apiUrls";
import { EventContainer, TicketList } from "./wrappers";
import TicketItem from "../../components/TicketItem";
import { Ticket } from "../../types/tickets.types";

const Event = () => {
  const { eventId, eventName } = useParams<{ eventId: string; eventName: string }>();

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

  const formattedEventName = eventName ? eventName.replace(/-/g, " ") : "Default Event Name";
  return (
    <EventContainer>
      <h2>{formattedEventName}</h2>
      { eventData.length === 0 ? (
        <p>No tickets left for this event.</p>
      ) : (
        <TicketList>
          <table>
            <thead>
              <tr>
                <th>Localidad</th>
                <th>Disponibles</th>
                <th>Precio por entrada</th>
                <th></th>
              </tr>
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
          </table>
        </TicketList>
      )}
    </EventContainer>
  );
};

export default Event;
