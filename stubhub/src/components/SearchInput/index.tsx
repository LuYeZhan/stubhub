import { useState, useEffect } from "react";
import { ButtonColors } from "../../constants/colors";
import { CategoryType } from "../../types/categories.types";
import { useNavigate } from "react-router-dom";
import { highlightSearchInput } from "../../helpers/searchHelpers";
import Button from "../Button";
import { FilteredWrapper, InputWrapper, SearchWrapper, TypeAheadWrapper } from "./wrappers";

interface SearchInputProps {
  categories: CategoryType[];
}

const SearchInput: React.FC<SearchInputProps> = ({ categories }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredCategories, setFilteredCategories] = useState<CategoryType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredCategories(
      categories.filter((category: CategoryType) =>
        category.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [categories, searchInput]);

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
        <Button bgColor={ButtonColors.blue} label="Search" />
      </SearchWrapper>
      {searchInput && (
        <TypeAheadWrapper>
          {filteredCategories.map((item: CategoryType) => (
            <FilteredWrapper key={item.id} onClick={() => handleCategoryClick(item.id)}>
              <h3>{highlightSearchInput(searchInput, item.name)}</h3>
            </FilteredWrapper>
          ))}
        </TypeAheadWrapper>
      )}
    </>
  );
};

export default SearchInput;