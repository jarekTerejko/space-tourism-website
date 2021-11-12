import { ContainerElement } from "../Container/ContainerElement";
import { HeadingOne } from "../HeadingOne/HeadingOne";
import { HomepageBtn } from "../HomepageBtnElement";
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
              <HomepageHeroColLeft>
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
              <HomepageHeroColRight>
                <HomepageBtn to='/destination'>Explore</HomepageBtn>
              </HomepageHeroColRight>
            </HomepageHeroInnerWrapper>
          </ContainerElement>
        </HomepageHeroWrapper>
      </>
    );
}

export default HomepageHero
