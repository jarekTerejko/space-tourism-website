import { AnimatePresence } from "framer-motion";
import { HeadingFour } from "../HeadingFour/HeadingFour";
import { NotFoundLink, NotFoundWrapper } from "./NotFoundElements";

const NotFound = () => {
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
    <AnimatePresence exitBeforeEnter>
      <NotFoundWrapper
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <HeadingFour roleHeading>404 This page could not be found</HeadingFour>
        <NotFoundLink to="/">Home</NotFoundLink>
      </NotFoundWrapper>
    </AnimatePresence>
  );
};

export default NotFound;
