export const opacityVariants = {
  visible: {
    opacity: 1,

    transition: { duration: 1, delay: 0.3 },
  },
  hidden: { opacity: 0 },
};

export const flyInFromBottom = {
  visible: {
    y: 0,
    opacity: 1,

    transition: { duration: 1 },
  },
  hidden: { y: 100, opacity: 0 },
};

export const flyInFromTop = {
  visible: {
    y: 0,
    opacity: 1,

    transition: { duration: 1 },
  },
  hidden: { y: -100, opacity: 0 },
};
export const flyInFromRight = {
  visible: {
    x: 0,
    opacity: 1,

    transition: { duration: 1 },
  },
  hidden: { x: 100, opacity: 0 },
};

export const flyInFromLeft = {
  visible: {
    x: 0,
    opacity: 1,

    transition: { duration: 1 },
  },
  hidden: { x: -100, opacity: 0 },
};
