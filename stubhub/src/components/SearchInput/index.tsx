import { useState, useEffect } from "react";
import { ButtonColors } from "../../constants/colors";
import { CategoryType } from "../../types/categories.types";
import { useNavigate } from "react-router-dom";
import { highlightSearchInput } from "../../helpers/searchHelpers";
import Button from "../Button";
import { FilteredWrapper, InputWrapper, SearchWrapper, TypeAheadWrapper } from "./wrappers";
import { SearchInputProps } from "../../types/search.types";
import Loading from "../Loading";
import useLoading from "../../hooks/useLoading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchInput: React.FC<SearchInputProps> = ({ categories }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredCategories, setFilteredCategories] = useState<CategoryType[]>([]);
  const [error, setError] = useState(false);
  const { loading, setLoading } = useLoading();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const filtered = categories.filter((category: CategoryType) =>
          category.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredCategories(filtered);
        setError(filtered.length === 0 && searchInput.trim() !== "");
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categories, searchInput, setLoading]);

  const handleCategoryClick = (id: number) => {
    navigate(`/category/${id}`);
  };

  return (
    <>
      <SearchWrapper>
        <InputWrapper
          placeholder="Search for an event, city, artist, or team"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button icon={<FontAwesomeIcon icon={faSearch} />} bgColor={ButtonColors.blue} label="Search" />
      </SearchWrapper>
      {loading && <Loading />}
      {!loading && (
        <>
          {error && (
            <TypeAheadWrapper>
              <FilteredWrapper>
                <h3>No category found with this name. Please try another name.</h3>
              </FilteredWrapper>
            </TypeAheadWrapper>
          )}
          {!error && searchInput && (
            <TypeAheadWrapper>
              {filteredCategories.map((item: CategoryType) => (
                <FilteredWrapper key={item.id} onClick={() => handleCategoryClick(item.id)}>
                  <h3>{highlightSearchInput(searchInput, item.name)}</h3>
                </FilteredWrapper>
              ))}
            </TypeAheadWrapper>
          )}
        </>
      )}
    </>
  );
};

export default SearchInput;
