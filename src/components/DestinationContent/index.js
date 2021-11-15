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
          {data[0].destinations.map((item, i) => {
            if (i === currentTab) {
              return (
                <DestinationContentInnerWrapper key={i}>
                  <DestinationContentColLeft>
                    <HeadingFive>
                      <span className="counter">01</span>Pick your destination
                    </HeadingFive>
                    <DestinationContentImgWrapper>
                      <ImageEl src={item.images.png} />
                    </DestinationContentImgWrapper>
                  </DestinationContentColLeft>
                  <DestinationContentColRight>
                    <DestinationNav>
                      {destinationNavItems.map((destination, i) => {
                        return (
                          <DestinationaNavItem key={i}>
                            <DestinationNavBtn
                              className={
                                destinationNavItems[i].isActive ? "active" : ""
                              }
                              onClick={() => toggleTab(i)}
                            >
                              {destination.name}
                            </DestinationNavBtn>
                          </DestinationaNavItem>
                        );
                      })}
                    </DestinationNav>
                    <HeadingTwo>{item.name}</HeadingTwo>
                    <TextRegular destinationPageTextText>
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
                  </DestinationContentColRight>
                </DestinationContentInnerWrapper>
              );
            } else {
              return null;
            }
          })}
        </ContainerElement>
      </DestinationContentWrapper>
    </>
  );
};

export default DestinationContent;
