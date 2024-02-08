import { ContainerWrapper } from "./wrappers";
import SearchInput from "../../components/SearchInput";
import { useContext } from "react";
import { DataContext }  from "../../context/DataContext";

const Home = () => {

  const { categories } = useContext(DataContext);

  return (
    <ContainerWrapper>
      <SearchInput categories={categories} />
    </ContainerWrapper>
  );
};

export default Home;
