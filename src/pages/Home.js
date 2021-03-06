import useFetch from "../useFetch";
import Loader from "../components/Loader";
import { PageBg } from "../components/PageBg/PageBgElement";
import HomepageHero from "../components/HomepageHero";
import NotFound from "../components/NotFound";

const Home = ({ containerVariants }) => {
  const { data, isLoading } = useFetch("../data.json");

  return (
    <>
      {isLoading ? <Loader /> : null}
      {data.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <PageBg
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
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
