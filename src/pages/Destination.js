import useFetch from "../useFetch";
import Loader from "../components/Loader";
import { PageBg } from "../components/PageBg/PageBgElement";
import DestinationContent from "../components/DestinationContent";
const Destination = ({ containerVariants }) => {
  const { data, isLoading } = useFetch("../data.json");

  return (
    <>
      {isLoading ? <Loader /> : null}
      {data.length === 0 ? null : (
        <>
          <PageBg
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            homeDesktopBg={data[0].bgs[1].desktop}
            homeTabletBg={data[0].bgs[1].tablet}
            homeMobileBg={data[0].bgs[1].mobile}
          >
            <DestinationContent data={data} />
          </PageBg>
        </>
      )}
    </>
  );
};

export default Destination;
