export const opacityVariants: opacityTransitionType = {
  visible: {
    opacity: 1,

    transition: { duration: 0.7, delay: 0.1 },
  },
  hidden: { opacity: 0 },
};

export const flyInFromBottom: flyInYTransitionType = {
  visible: {
    y: 0,
    opacity: 1,

    transition: { duration: 1, delay: 0.2 },
  },
  hidden: { y: 100, opacity: 0 },
};
export const flyInFromBottom2: flyInYTransitionType = {
  visible: {
    y: 0,
    opacity: 1,

    transition: { duration: 1, delay: 0.3 },
  },
  hidden: { y: 100, opacity: 0 },
};

export const flyInFromTop: flyInYTransitionType = {
  visible: {
    y: 0,
    opacity: 1,

    transition: { duration: 1, delay: 0.2 },
  },
  hidden: { y: -100, opacity: 0 },
};
export const flyInFromRight: flyInXTransitionType = {
  visible: {
    x: 0,
    opacity: 1,

    transition: { duration: 1 },
  },
  hidden: { x: 100, opacity: 0 },
};

export const flyInFromLeft: flyInXTransitionType = {
  visible: {
    x: 0,
    opacity: 1,

    transition: { duration: 1 },
  },
  hidden: { x: -100, opacity: 0 },
};

export type opacityTransitionType = {
  visible: {
    opacity: number;
    transition: {
      duration: number;
      delay: number;
    };
  };
  hidden: {
    opacity: number;
  };
};

export type flyInXTransitionType = {
  visible: {
    x: number;
    opacity: number;
    transition: {
      duration: number;
    };
  };
  hidden: {
    x: number;
    opacity: number;
  };
};

export type flyInYTransitionType = {
  visible: {
    y: number;
    opacity: number;
    transition: {
      duration: number;
      delay?: number;
    };
  };
  hidden: {
    y: number;
    opacity: number;
  };
};
