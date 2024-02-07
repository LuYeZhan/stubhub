import { useEffect, useState } from "react";
import { getData, getDataById } from "../../api/endpoints/dataService";
import { Container, DateTime, EventImage, EventInfo, EventTitle, Locations, TicketActions, TicketEvent, TicketListItem, TicketsList, Wrapper } from "./wrappers";
import { ID_TYPES, URLS } from "../../constants/apiUrls";
import { UserType } from "../../types/users.type";
import { Ticket } from "../../types/tickets.types";
import { EventType } from "../../types/events.types";
import { formatDate } from "../../helpers/dateFormat";
import TicketActionItem from "../../components/TicketActionItem";

const Account = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [userTickets, setUserTickets] = useState<Ticket[]>([]);
  const [userEvents, setUserEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const username = 'Nedra';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsData, usersData] = await Promise.all([
          getData(URLS.EVENTS),
          getData(URLS.USERS)
        ]);
        const flattenedUserData: UserType[] = usersData.flat();
        const foundUser = flattenedUserData.find((user) => user.username === username);
        if (foundUser) {
          console.log('You are logged in!');
          setUser(foundUser);
          const userTicketsData: Ticket[] = await getDataById(URLS.TICKETS, ID_TYPES.SELLER_ID, foundUser.id);
          setUserTickets(userTicketsData);
          setUserEvents(eventsData.filter((event: EventType) => userTicketsData.some(ticket => ticket.eventId === event.id)));
          setLoading(false);
        } else {
          console.error("This username doesn't exist.");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
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