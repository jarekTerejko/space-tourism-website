import useFetch from "../useFetch";
import { PageBg } from "../components/PageBg/PageBgElement";
import CrewContent from "../components/CrewContent";
import Loader from "../components/Loader";
const Crew = () => {
  const { data, isLoading } = useFetch("../data.json");
  //   console.log(data);
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
      {data.length === 0 ? null : (
        <PageBg
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          homeDesktopBg={data[0].bgs[2].desktop}
          homeTabletBg={data[0].bgs[2].tablet}
          homeMobileBg={data[0].bgs[2].mobile}
        >
          <CrewContent data={data} />
        </PageBg>
      )}
    </>
  );
};

export default Crew;
