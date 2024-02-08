import { useContext, useEffect, useState } from "react";
import { getDataById } from "../../api/endpoints/dataService";
import { Container, DateTime, EventImage, EventInfo, EventTitle, Locations, TicketActions, TicketEvent, TicketListItem, TicketsList, Wrapper } from "./wrappers";
import { ID_TYPES, URLS } from "../../constants/apiUrls";
import { Ticket } from "../../types/tickets.types";
import { EventType } from "../../types/events.types";
import { formatDate } from "../../helpers/dateFormat";
import TicketActionItem from "../../components/TicketActionItem";
import SearchInput from "../../components/SearchInput";
import { DataContext } from "../../context/DataContext";

const Account = () => {
  const [userEvents, setUserEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { categories, user, events } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) { 
          const userTicketsData: Ticket[] = await getDataById(URLS.TICKETS, ID_TYPES.SELLER_ID, user.id);
          setUserEvents(events.filter((event: EventType) => userTicketsData.some(ticket => ticket.eventId === event.id)));
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <p>Hello {user?.name}</p>
      <SearchInput categories={categories} />
      <Container>
        <h2>Tickets</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <TicketsList>
            {userEvents.map((event) => (
              <TicketListItem key={event.id}>
                <TicketEvent>
                  <EventImage src={event.imageUrl} />
                  <EventInfo>
                    <EventTitle>{event.title}</EventTitle>
                    <DateTime>{formatDate(event.date)}</DateTime>
                    <Locations>{`${event.city}, ${event.country}`}</Locations>
                  </EventInfo>
                </TicketEvent>
                <TicketActions>
                  <TicketActionItem iconClass="fa-files-o" actionText="Duplicate" />
                  <TicketActionItem iconClass="fa-trash" actionText="Remove" />
                  <TicketActionItem iconClass="fa-eye" actionText="Activate" />
                  <TicketActionItem iconClass="fa-eye-slash" actionText="Deactivate" />
                </TicketActions>
              </TicketListItem>
            ))}
          </TicketsList>
        )}
      </Container>
    </Wrapper>
  );
};

export default Account;