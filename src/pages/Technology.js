import useFetch from "../useFetch";
import Loader from "../components/Loader";
import { PageBg } from "../components/PageBg/PageBgElement";
const Technology = () => {
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
