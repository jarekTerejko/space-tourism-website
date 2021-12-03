import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ContainerElement } from "../Container/ContainerElement";
import { HeadingFive } from "../HeadingFive/HeadingFive";
import { HeadingFour } from "../HeadingFour/HeadingFour";
import { HeadingThree } from "../HeadingThree/HeadingThree";
import { ImageEl } from "../Image/ImageElement";
import { TextRegular } from "../TextRegular/TextRegularElement";
import {
  CrewContenInnertWrapper,
  CrewContentColLeft,
  CrewContentColRight,
  CrewContentDot,
  CrewContentDotsContainer,
  CrewContentPersonInfoBox,
  CrewContentWrapper,
} from "./CrewContentElements";

const CrewContent = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [dots, setDots] = useState([
    { isActive: true },
    { isActive: false },
    { isActive: false },
    { isActive: false },
  ]);

  const toggleSlide = (index) => {
    setCurrentSlide(index);
    toggleDots(index);
  };

  const toggleDots = (index) => {
    setDots(
      dots.map((btn, i) => {
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
      <CrewContentWrapper>
        <ContainerElement>
          <HeadingFive crewHeading>
            <span className="counter">02</span>Meet your crew
          </HeadingFive>
          <AnimatePresence exitBeforeEnter initial={false}>
            {data[0].crew
              .filter((_, iterator) => iterator === currentSlide)
              .map((item, i) => {
                return (
                  <CrewContenInnertWrapper key={currentSlide}>
                    <CrewContentColLeft>
                      <CrewContentPersonInfoBox
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <HeadingFour roleHeading>{item.role}</HeadingFour>
                        <HeadingThree roleHeading>{item.name}</HeadingThree>
                        <TextRegular crewPageText>{item.bio}</TextRegular>
                      </CrewContentPersonInfoBox>

                      <CrewContentDotsContainer>
                        {dots.map((dot, i) => {
                          return (
                            <CrewContentDot
                              key={i}
                              className={dots[i].isActive ? "active" : ""}
                              onClick={() => toggleSlide(i)}
                            />
                          );
                        })}
                      </CrewContentDotsContainer>
                    </CrewContentColLeft>
                    <CrewContentColRight
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`${item.name.split(" ")[0].toLowerCase()}`}
                    >
                      <ImageEl
                        className={`${item.name.split(" ")[0].toLowerCase()}`}
                        src={item.images.png}
                      />
                    </CrewContentColRight>
                  </CrewContenInnertWrapper>
                );
              })}
          </AnimatePresence>
        </ContainerElement>
      </CrewContentWrapper>
    </>
  );
};

export default CrewContent;
