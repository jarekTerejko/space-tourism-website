import useFetch from "../useFetch";
import Loader from "../components/Loader";
import { PageBg } from "../components/PageBg/PageBgElement";
const Technology = () => {
  const { data, isLoading } = useFetch("../data.json");
  //   console.log(data);

  return (
    <>
      {isLoading ? <Loader /> : null}
      {data.length === 0 ? null : (
        <PageBg
          homeDesktopBg={data[0].bgs[3].desktop}
          homeTabletBg={data[0].bgs[3].tablet}
          homeMobileBg={data[0].bgs[3].mobile}
        >
          <h1>Technology</h1>
        </PageBg>
      )}
    </>
  );
};

export default Technology;
