const animationVariant = {
  initial: {
    x: -1000,
    opacity: 0,
  },
  animate: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      opacity: {
        duration: 1,
      },
      delay: custom,
      type: "tween",
    },
  }),
};
export default animationVariant;
