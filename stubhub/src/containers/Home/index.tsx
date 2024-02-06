import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { getData } from "../../api/endpoints/dataService";
import { URLS } from "../../constants/apiUrls";
import { Category } from "../../types/categories.types";
import { useNavigate } from "react-router-dom";
import { ContainerWrapper, FilteredWrapper, InputWrapper, SearchWrapper, TypeAheadWrapper,Wrapper } from "./wrappers";
import { highlightSearchInput } from "../../helpers/searchHelpers";
import { ButtonColors } from "../../constants/colors";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

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

  const filteredCategories = categories.filter((category: Category) =>
    category.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleCategoryClick = (id: number) => {
    navigate(`/category/${id}`);
  };

  return (
    <ContainerWrapper>
      <Wrapper>
        <SearchWrapper>
          <InputWrapper
            placeholder="Search for an event, city, artist, or team"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button bgColor={ButtonColors.blue} label="Search" />
        </SearchWrapper>
        {searchInput && (
          <TypeAheadWrapper>
            {filteredCategories.map((item: Category) => (
              <FilteredWrapper key={item.id} onClick={() => handleCategoryClick(item.id)}>
                <h3>{highlightSearchInput(searchInput, item.name)}</h3>
              </FilteredWrapper>
            ))}
          </TypeAheadWrapper>
        )}
      </Wrapper>
    </ContainerWrapper>
  );
};

export default Home;
