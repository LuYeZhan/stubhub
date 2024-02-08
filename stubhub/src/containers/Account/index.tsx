import { useContext, useEffect, useState } from "react";
import { getDataById } from "../../api/endpoints/dataService";
import { Container, DateTime, EventImage, EventInfo, EventTitle, Locations, TicketActions, TicketEvent, TicketListItem, TicketsList, Wrapper } from "./wrappers";
import { ID_TYPES, URLS } from "../../constants/apiUrls";
import { Ticket } from "../../types/tickets.types";
import { EventType, TempEventType } from "../../types/events.types";
import { formatDate } from "../../helpers/dateFormat";
import TicketActionItem from "../../components/TicketActionItem";
import SearchInput from "../../components/SearchInput";
import { DataContext } from "../../context/DataContext";

const Account = () => {
  const [userEvents, setUserEvents] = useState<TempEventType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { categories, user, events } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) { 
          const userTicketsData: Ticket[] = await getDataById(URLS.TICKETS, ID_TYPES.SELLER_ID, user.id);
          const updatedEvents = events.map((event: EventType) => {
            const ticket = userTicketsData.find(ticket => ticket.eventId === event.id);
            return {
              ...event,
              status: ticket ? ticket.status : false
            };
          });
          const filteredEvents = updatedEvents.filter((event: EventType) => userTicketsData.some(ticket => ticket.eventId === event.id));
          setUserEvents(filteredEvents);          
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

  const handleDuplicateTicket = (eventId: number) => {
    const duplicatedEvents = [...userEvents];
    const eventToDuplicate = duplicatedEvents.find(event => event.id === eventId);
    if (eventToDuplicate) {
      const duplicatedEvent = { ...eventToDuplicate, id: Math.floor(Math.random() * 1000000), title: `Duplicated ${eventToDuplicate.title}` };
      setUserEvents([...userEvents, duplicatedEvent]);
    }
  };

  const handleRemoveTicket = (eventId: number) => {
    const filteredEvents = userEvents.filter(event => event.id !== eventId);
    setUserEvents(filteredEvents);
  };

  const handleActivateTicket = (eventId: number) => {
    const updatedEvents = userEvents.map(event =>
      event.id === eventId ? { ...event, status: true } : event
    );
    setUserEvents(updatedEvents);
  };

  const handleDeactivateTicket = (eventId: number) => {
    const updatedEvents = userEvents.map(event =>
      event.id === eventId ? { ...event, status: false } : event
    );
    setUserEvents(updatedEvents);
  };

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
              <TicketListItem key={event.id} status={event.status}>
                <TicketEvent>
                  <EventImage src={event.imageUrl} />
                  <EventInfo>
                    <EventTitle>{event.title}</EventTitle>
                    <DateTime>{formatDate(event.date)}</DateTime>
                    <Locations>{`${event.city}, ${event.country}`}</Locations>
                  </EventInfo>
                </TicketEvent>
                <TicketActions>
                  <TicketActionItem onClick={() => handleDuplicateTicket(event.id)} iconClass="fa-files-o" actionText="Duplicate" />
                  <TicketActionItem onClick={() => handleRemoveTicket(event.id)} iconClass="fa-trash" actionText="Remove" />
                  <TicketActionItem onClick={() => handleActivateTicket(event.id)} iconClass="fa-eye" actionText="Activate" />
                  <TicketActionItem onClick={() => handleDeactivateTicket(event.id)} iconClass="fa-eye-slash" actionText="Deactivate" />
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