import { useContext, useEffect, useState } from "react";
import { getDataDetails } from "../../api/endpoints/dataService";
import { DETAILS_URLS, ID_URLS } from "../../constants/apiUrls";
import { EventType } from "../../types/events.types";
import Button from "../../components/Button";
import { ButtonWrapper, CategoryWrapper, EventContainer, EventImageWrapper, EventItem, EventTitleWrapper, EventWrapper } from "./wrappers";
import { formatDate } from "../../helpers/dateFormat";
import SearchInput from "../../components/SearchInput";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { ButtonColors } from "../../constants/colors";
import Loading from "../../components/Loading";

const Category = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [events, setEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { categories } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        setLoading(true);
        if (categoryId) { 
          const response = await getDataDetails(
            DETAILS_URLS.CATEGORIES,
            parseInt(categoryId),
            ID_URLS.EVENTS
          );
          const categoryData = response;
          setEvents(categoryData);
        }
      } catch (error) {
        console.error("Error fetching category details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryDetails();
  }, [categoryId]);

  const onClick = (id: number, eventName: string) => {
    const encodedEventName = encodeURIComponent(eventName.replace(/\s+/g, "-"));
    navigate(`/event/${encodedEventName}/${id}`);
  };

  return (
    <CategoryWrapper>
      <SearchInput categories={categories} />
      {loading ? (
        <Loading />
      ) : (
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
              <ButtonWrapper>
                <Button
                  label="Buy"
                  color={ButtonColors.white}
                  bgColor={ButtonColors.green}
                  onClick={() => onClick(item.id, item.title)}
                />
              </ButtonWrapper>
            </EventWrapper>
          ))}
        </EventContainer>
      )}
    </CategoryWrapper>
  );
};

export default Category;
