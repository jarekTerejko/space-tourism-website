import useFetch from "../useFetch";
import Loader from "../components/Loader";

const Home = () => {
  const { data, isLoading } = useFetch("../data.json");
  //   console.log(data);

  return (
    <>
      {isLoading ? <Loader /> : null}
      {data.length === 0 ? null : <h1>Home</h1>}
    </>
  );
};

export default Home;
