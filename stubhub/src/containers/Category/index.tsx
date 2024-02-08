import { useContext, useEffect, useState } from "react";
import { getDataDetails } from "../../api/endpoints/dataService";
import { DETAILS_URLS, ID_URLS } from "../../constants/apiUrls";
import { EventType } from "../../types/events.types";
import Button from "../../components/Button";
import { EventContainer, EventImageWrapper, EventItem, EventTitleWrapper, EventWrapper } from "./wrappers";
import { formatDate } from "../../helpers/dateFormat";
import SearchInput from "../../components/SearchInput";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

const Category = () => {

  const { categoryId } = useParams<{ categoryId: string }>();
  const [ events, setEvents ] = useState<EventType[]>([]);
  const { categories } = useContext(DataContext);

  const navigate = useNavigate()

  useEffect(() => {
    if (categoryId) {
      const fetchCategoryDetails = async () => {
        try {
          const response = await getDataDetails(
            DETAILS_URLS.CATEGORIES,
            parseInt(categoryId),
            ID_URLS.EVENTS
          );
          const categoryData = response;
          setEvents(categoryData);
        } catch (error) {
          console.error("Error fetching category details:", error);
        }
      };

      fetchCategoryDetails();
    }
  }, [categoryId]);

  const onClick = (id: number, eventName: string) => {
    const encodedEventName = encodeURIComponent(eventName.replace(/\s+/g, "-"));
    navigate(`/event/${encodedEventName}/${id}`);
  }

  return (
    <>
      <SearchInput categories={categories} />
      <EventContainer>
        {events.map((item: EventType) => (
          <EventWrapper key={item.id}>
            <EventImageWrapper>
              <img src={item.imageUrl} alt={item.title} />
              <EventTitleWrapper>{item.title}</EventTitleWrapper>
            </EventImageWrapper>
            <EventItem>
              <p>{item.venueName}</p>
              <p>{item.city}</p>
              <p>{formatDate(item.date)}</p>
            </EventItem>
            <Button label="buy" color="white" bgColor="green" onClick={() => onClick(item.id, item.title)}/>
          </EventWrapper>
        ))}
      </EventContainer>
    </>
  );
};

export default Category;
