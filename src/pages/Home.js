import useFetch from "../useFetch";
import Loader from "../components/Loader";
import { PageBg } from "../components/PageBg/PageBgElement";
import HomepageHero from "../components/HomepageHero";
import NotFound from "../components/NotFound";

const Home = () => {
  const { data, isLoading } = useFetch("../data.json");

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.1, duration: 1 },
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  };

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
