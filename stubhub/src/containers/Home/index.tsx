import { useEffect, useState } from "react";
import { ContainerWrapper } from "./wrappers";
import { CategoryType } from "../../types/categories.types";
import SearchInput from "../../components/SearchInput";
import { getData } from "../../api/endpoints/dataService";
import { URLS } from "../../constants/apiUrls";

const Home = () => {
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

  return (
    <ContainerWrapper>
      <SearchInput categories={categories} />
    </ContainerWrapper>
  );
};

export default Home;
