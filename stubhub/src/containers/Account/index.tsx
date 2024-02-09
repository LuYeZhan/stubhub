import { useContext, useEffect, useState } from "react";
import { getDataById } from "../../api/endpoints/dataService";
import { Container, DateTime, EventImage, EventInfo, EventTitle, Locations, ParagraphWrapper, TicketActions, TicketEvent, TicketListItem, TicketsList, Wrapper } from "./wrappers";
import { ID_TYPES, URLS } from "../../constants/apiUrls";
import { Ticket } from "../../types/tickets.types";
import { EventType, TempEventType } from "../../types/events.types";
import { formatDate } from "../../helpers/dateFormat";
import TicketActionItem from "../../components/TicketActionItem";
import SearchInput from "../../components/SearchInput";
import { DataContext } from "../../context/DataContext";
import Loading from "../../components/Loading";
import useLoading from "../../hooks/useLoading";
import { faTrash, faFile, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Account = () => {
  const [userEvents, setUserEvents] = useState<TempEventType[]>([]);
  const { loading, setLoading } = useLoading();
  const { categories, user, events } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
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
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, setLoading]);

  const handleDuplicateTicket = (eventId: number) => {
    const duplicatedEvents = [...userEvents];
    const eventToDuplicateIndex = duplicatedEvents.findIndex(event => event.id === eventId);
    if (eventToDuplicateIndex !== -1) {
      const eventToDuplicate = duplicatedEvents[eventToDuplicateIndex];
      const duplicatedEvent = { ...eventToDuplicate, id: Math.floor(Math.random() * 1000000), title: `Duplicated ${eventToDuplicate.title}` };
      // Insert the duplicated event below the original event, adding duplicate to the title
      duplicatedEvents.splice(eventToDuplicateIndex + 1, 0, duplicatedEvent);
      setUserEvents(duplicatedEvents);
    }
  };
  

  const handleRemoveTicket = (eventId: number) => {
    const filteredEvents = userEvents.filter(event => event.id !== eventId);
    setUserEvents(filteredEvents);
  };

  const handleToggleTicketStatus = (eventId: number, status: boolean) => {
    const updatedEvents = userEvents.map(event =>
      event.id === eventId ? { ...event, status } : event
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
          <Loading />
        ) : (
          <TicketsList>
            {userEvents.map((event) => (
              <TicketListItem key={event.id} status={event.status}>
                <TicketEvent>
                  <EventImage src={event.imageUrl} />
                  <EventInfo>
                    <EventTitle>{event.title}</EventTitle>
                    <ParagraphWrapper>
                      <DateTime>{formatDate(event.date)}</DateTime>
                      <Locations>{`${event.city}, ${event.country}`}</Locations>
                    </ParagraphWrapper>
                  </EventInfo>
                </TicketEvent>
                <TicketActions>
                  <TicketActionItem onClick={() => handleDuplicateTicket(event.id)} icon={<FontAwesomeIcon icon={faFile} />}  actionText="Duplicate" />
                  <TicketActionItem onClick={() => handleRemoveTicket(event.id)} icon={<FontAwesomeIcon icon={faTrash} />}   actionText="Remove" />
                  <TicketActionItem onClick={() => handleToggleTicketStatus(event.id, true)} icon={<FontAwesomeIcon icon={faEye} />}  actionText="Activate" />
                  <TicketActionItem onClick={() => handleToggleTicketStatus(event.id, false)} icon={<FontAwesomeIcon icon={faEyeSlash} />}   actionText="Deactivate" />
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