import { useState } from "react";
import { ContainerElement } from "../Container/ContainerElement";
import { HeadingFive } from "../HeadingFive/HeadingFive";
import { HeadingThree } from "../HeadingThree/HeadingThree";
import { ImageEl } from "../Image/ImageElement";
import { TextRegular } from "../TextRegular/TextRegularElement";
import {
  TechnologyContentCircleBtn,
  TechnologyContentCircleBtnsContainer,
  TechnologyContentColDescription,
  TechnologyContentInnerWrapper,
  TechnologyContentSubheading,
  TechnologyContentWrapper,
} from "./TechnologyContentElements";

const TechnologyContent = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [circles, setCircles] = useState([
    { text: "1", isActive: true },
    { text: "2", isActive: false },
    { text: "3", isActive: false },
  ]);

  const toggleSlide = (index) => {
    setCurrentSlide(index);
    toggleCircles(index);
  };

  const toggleCircles = (index) => {
    setCircles(
      circles.map((btn, i) => {
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
      <TechnologyContentWrapper>
        <ContainerElement>
          <HeadingFive>
            <span className="counter">03</span>SPACE LAUNCH 101
          </HeadingFive>
          {data[0].technology.map((item, i) => {
            if (i === currentSlide) {
              return (
                <TechnologyContentInnerWrapper>
                  <TechnologyContentCircleBtnsContainer>
                    {circles.map((circle, i) => {
                      return (
                        <TechnologyContentCircleBtn
                          className={circles[i].isActive ? "active" : ""}
                          onClick={() => toggleSlide(i)}
                        >
                          {circle.text}
                        </TechnologyContentCircleBtn>
                      );
                    })}
                  </TechnologyContentCircleBtnsContainer>
                  <TechnologyContentColDescription>
                    <TechnologyContentSubheading>
                      The terminology...
                    </TechnologyContentSubheading>
                    <HeadingThree technologyHeading>{item.name}</HeadingThree>
                    <TextRegular>{item.description}</TextRegular>
                  </TechnologyContentColDescription>
                  <ImageEl
                    src={item.images.portrait}
                    className="technology-portrait"
                  />
                  <ImageEl
                    src={item.images.portrait}
                    className="technology-landscape"
                  />
                </TechnologyContentInnerWrapper>
              );
            } else {
              return null;
            }
          })}
        </ContainerElement>
      </TechnologyContentWrapper>
    </>
  );
};

export default TechnologyContent;
