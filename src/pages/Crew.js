import useFetch from "../useFetch";
import Loader from "../components/Loader";
import { PageBg } from "../components/PageBg/PageBgElement";
const Crew = () => {
  const { data, isLoading } = useFetch("../data.json");
  //   console.log(data);

  return (
    <>
      {isLoading ? <Loader /> : null}
      {data.length === 0 ? null : (
        <PageBg
          homeDesktopBg={data[0].bgs[2].desktop}
          homeTabletBg={data[0].bgs[2].tablet}
          homeMobileBg={data[0].bgs[2].mobile}
        >
          <h1>Crew</h1>
        </PageBg>
      )}
    </>
  );
};

export default Crew;
