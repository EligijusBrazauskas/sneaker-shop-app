export const offsetCalculator = (windowWidth: number) => {
  if (windowWidth < 768) {
    return 20;
  }

  if (windowWidth > 767 && windowWidth < 1024) {
    return 40;
  }

  if (windowWidth > 1023 && windowWidth < 1200) {
    return 60;
  }

  if (windowWidth > 1199) {
    return 100;
  }
};
