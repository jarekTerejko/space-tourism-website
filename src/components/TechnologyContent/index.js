import { AnimatePresence, motion } from "framer-motion";
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
          <AnimatePresence exitBeforeEnter initial={false}>
            {data[0].technology
              .filter((_, iterator) => iterator === currentSlide)
              .map((item) => {
                return (
                  <TechnologyContentInnerWrapper key={currentSlide}>
                    <TechnologyContentCircleBtnsContainer>
                      {circles.map((circle, i) => {
                        return (
                          <TechnologyContentCircleBtn
                            className={circles[i].isActive ? "active" : ""}
                            onClick={() => toggleSlide(i)}
                            key={i}
                          >
                            {circle.text}
                          </TechnologyContentCircleBtn>
                        );
                      })}
                    </TechnologyContentCircleBtnsContainer>
                    <TechnologyContentColDescription
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <TechnologyContentSubheading>
                        The terminology...
                      </TechnologyContentSubheading>
                      <HeadingThree technologyHeading>{item.name}</HeadingThree>
                      <TextRegular>{item.description}</TextRegular>
                    </TechnologyContentColDescription>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <ImageEl
                        src={item.images.portrait}
                        className="technology-portrait"
                      />
                      <ImageEl
                        src={item.images.landscape}
                        className="technology-landscape"
                      />
                    </motion.div>
                  </TechnologyContentInnerWrapper>
                );
              })}
          </AnimatePresence>
        </ContainerElement>
      </TechnologyContentWrapper>
    </>
  );
};

export default TechnologyContent;
