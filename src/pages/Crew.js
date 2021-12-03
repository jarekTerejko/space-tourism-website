import useFetch from "../useFetch";
import { PageBg } from "../components/PageBg/PageBgElement";
import CrewContent from "../components/CrewContent";
import Loader from "../components/Loader";
const Crew = ({ containerVariants }) => {
  const { data, isLoading } = useFetch("../data.json");

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
