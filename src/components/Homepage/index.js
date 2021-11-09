import HomepageHero from "../HomepageHero";
import { HomepageWrapper } from "./HomepageElements";

const Homepage = ({ homeDesktopBg, homeTabletBg, homeMobileBg }) => {
  return (
    <>
      <HomepageWrapper
        homeDesktopBg={homeDesktopBg}
        homeTabletBg={homeTabletBg}
        homeMobileBg={homeMobileBg}
      >
        <HomepageHero />
      </HomepageWrapper>
    </>
  );
};

export default Homepage;
