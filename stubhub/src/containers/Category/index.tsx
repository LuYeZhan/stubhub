import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData, getDataDetails } from "../../api/endpoints/dataService";
import { DETAILS_URLS, ID_URLS, URLS } from "../../constants/apiUrls";
import { EventType } from "../../types/events.types";
import Button from "../../components/Button";
import { EventContainer, EventImageWrapper, EventItem, EventTitleWrapper, EventWrapper } from "./wrappers";
import { formatDate } from "../../helpers/dateFormat";
import SearchInput from "../../components/SearchInput";
import { CategoryType } from "../../types/categories.types";

const Category = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [events, setEvents] = useState<EventType[]>([]); 
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(URLS.CATEGORIES);
        setCategories(response);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

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

  if (events.length === 0) {
    return <p>Loading...</p>;
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
            <Button label="buy" color="white" bgColor="green" />
          </EventWrapper>
        ))}
      </EventContainer>
    </>
  );
};

export default Category;
