import useFetch from "../useFetch";
import Loader from "../components/Loader";
import { PageBg } from "../components/PageBg/PageBgElement";
import HomepageHero from "../components/HomepageHero";

const Home = () => {
  const { data, isLoading } = useFetch("../data.json");

  return (
    <>
      {isLoading ? <Loader /> : null}
      {data.length === 0 ? null : (
        <>
          <PageBg
            homeDesktopBg={data[0].bgs[0].desktop}
            homeTabletBg={data[0].bgs[0].tablet}
            homeMobileBg={data[0].bgs[0].mobile}
          >
            <HomepageHero />
          </PageBg>
        </>
      )}
    </>
  );
};

export default Home;
