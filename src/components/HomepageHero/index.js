import { AnimatePresence } from "framer-motion";
import { ContainerElement } from "../Container/ContainerElement";
import { HeadingOne } from "../HeadingOne/HeadingOne";
import { HomepageBtn } from "../HomepageBtn/HomepageBtnElement";
import {
  HomepageHeroColLeft,
  HomepageHeroColRight,
  HomepageHeroInnerWrapper,
  HomepageHeroWrapper,
} from "../HomepageHero/HomepageHeroElements";
import { TextRegular } from "../TextRegular/TextRegularElement";
const HomepageHero = () => {
  return (
    <>
      <HomepageHeroWrapper>
        <ContainerElement>
          <HomepageHeroInnerWrapper>
            <AnimatePresence>
              <HomepageHeroColLeft
                initial={{ opacity: 0, y: -50 }}
                transition={{ delay: 0.7 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <HeadingOne>
                  <span className="intro">So, you want to travel to</span>
                  <span className="heading">Space</span>
                </HeadingOne>
                <TextRegular homepageText>
                  Let’s face it; if you want to go to space, you might as well
                  genuinely go to outer space and not hover kind of on the edge
                  of it. Well sit back, and relax because we’ll give you a truly
                  out of this world experience!
                </TextRegular>
              </HomepageHeroColLeft>
            </AnimatePresence>
            <HomepageHeroColRight
              initial={{ scale: 0 }}
              transition={{ delay: 1 }}
              animate={{ scale: 1 }}
            >
              <HomepageBtn to="/destination">Explore</HomepageBtn>
            </HomepageHeroColRight>
          </HomepageHeroInnerWrapper>
        </ContainerElement>
      </HomepageHeroWrapper>
    </>
  );
};

export default HomepageHero;
