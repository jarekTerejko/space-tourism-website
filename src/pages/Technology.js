import useFetch from "../useFetch";
import Loader from "../components/Loader";
import { PageBg } from "../components/PageBg/PageBgElement";
import TechnologyContent from "../components/TechnologyContent";
const Technology = ({ containerVariants }) => {
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
          homeDesktopBg={data[0].bgs[3].desktop}
          homeTabletBg={data[0].bgs[3].tablet}
          homeMobileBg={data[0].bgs[3].mobile}
        >
          <TechnologyContent data={data} />
        </PageBg>
      )}
    </>
  );
};

export default Technology;
