import Button from "../../components/Button";

const Home = () => {
  return (
    <div>
      <div>
        <form action="#" method="get" className="searchbox">
          <input
            name="query"
            autoComplete="off"
            placeholder="Search for an event, city, artist, or team"
            type="text"
            value=""
          />
          <Button label="Search"/>
        </form>
      </div>
    </div>
  );
};

export default Home;
