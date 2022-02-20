export const slidesShownCalculator = (windowWidth: number) => {
  if (windowWidth < 768) {
    return 1.3;
  }

  if (windowWidth > 767 && windowWidth < 1024) {
    return 1.5;
  }

  if (windowWidth > 1023 && windowWidth < 1200) {
    return 1.8;
  }

  if (windowWidth > 1199) {
    return 2.2;
  }
};