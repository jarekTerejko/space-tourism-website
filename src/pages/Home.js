import useFetch from "../useFetch";
import Loader from "../components/Loader";
import Homepage from "../components/Homepage";

const Home = () => {
  const { data, isLoading } = useFetch("../data.json");

  return (
    <>
      {isLoading ? <Loader /> : null}
      {data.length === 0 ? null : (
        <>
          <Homepage
            homeDesktopBg={data[0].bgs[0].desktop}
            homeTabletBg={data[0].bgs[0].tablet}
            homeMobileBg={data[0].bgs[0].mobile}
          />
        </>
      )}
    </>
  );
};

export default Home;
