import { useState } from "react";
import { ContainerElement } from "../Container/ContainerElement";
import { HeadingFive } from "../HeadingFive/HeadingFive";
import { HeadingTwo } from "../HeadingTwo/HeadingTwo";
import { ImageEl } from "../Image/ImageElement";
import {
  DestinationaNavItem,
  DestinationContentColLeft,
  DestinationContentColRight,
  DestinationContentImgWrapper,
  DestinationContentInnerWrapper,
  DestinationContentWrapper,
  DestinationInfoBox,
  DestinationInfoBoxColLeft,
  DestinationInfoBoxColRight,
  DestinationNav,
  DestinationNavBtn,
} from "./DestinationContentElements";
import { TextRegular } from "../TextRegular/TextRegularElement";
import { SubheadingTwo } from "../SubheadingTwo/SubheadingTwoElement";
import { SubheadingOne } from "../SubheadingOne/SubheadingOneElement";
import { AnimatePresence, motion } from "framer-motion";

const DestinationContent = ({ data }) => {
  // console.log(data)

  const [destinationNavItems, setDestinationNavItems] = useState([
    { name: "Moon", isActive: true },
    { name: "Mars", isActive: false },
    { name: "Europa", isActive: false },
    { name: "Titan", isActive: false },
  ]);

  const [currentTab, setCurrentTab] = useState(0);

  const toggleTab = (index) => {
    setCurrentTab(index);
    toggleDestinationTab(index);
  };

  const toggleDestinationTab = (index) => {
    setDestinationNavItems(
      destinationNavItems.map((btn, i) => {
        if (i === index) {
          btn.isActive = true;
        } else {
          btn.isActive = false;
        }
        return btn;
      })
    );
  };
  return (
    <>
      <DestinationContentWrapper>
        <ContainerElement>
          <AnimatePresence exitBeforeEnter initial={false}>
            {data[0].destinations
              .filter((_, iterator) => iterator === currentTab)
              .map((item, i) => {
                return (
                  <DestinationContentInnerWrapper key={currentTab}>
                    <DestinationContentColLeft>
                      <HeadingFive>
                        <span className="counter">01</span>Pick your destination
                      </HeadingFive>
                      <AnimatePresence>
                        <DestinationContentImgWrapper
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <img src={item.images.png} alt={item.name} />
                        </DestinationContentImgWrapper>
                      </AnimatePresence>
                    </DestinationContentColLeft>
                    <DestinationContentColRight>
                      <DestinationNav>
                        {destinationNavItems.map((destination, i) => {
                          return (
                            <DestinationaNavItem key={i}>
                              <DestinationNavBtn
                                className={
                                  destinationNavItems[i].isActive
                                    ? "active"
                                    : ""
                                }
                                onClick={() => toggleTab(i)}
                              >
                                {destination.name}
                              </DestinationNavBtn>
                            </DestinationaNavItem>
                          );
                        })}
                      </DestinationNav>
                      <motion.div
                        key={item.currentTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <HeadingTwo>{item.name}</HeadingTwo>
                        <TextRegular destinationPageText>
                          {item.description}
                        </TextRegular>
                        <DestinationInfoBox>
                          <DestinationInfoBoxColLeft>
                            <SubheadingTwo>Avg. Distance</SubheadingTwo>
                            <SubheadingOne>{item.distance}</SubheadingOne>
                          </DestinationInfoBoxColLeft>
                          <DestinationInfoBoxColRight>
                            <SubheadingTwo>Est. travel time</SubheadingTwo>
                            <SubheadingOne>{item.travel}</SubheadingOne>
                          </DestinationInfoBoxColRight>
                        </DestinationInfoBox>
                      </motion.div>
                    </DestinationContentColRight>
                  </DestinationContentInnerWrapper>
                );
              })}
          </AnimatePresence>
        </ContainerElement>
      </DestinationContentWrapper>
    </>
  );
};

export default DestinationContent;
