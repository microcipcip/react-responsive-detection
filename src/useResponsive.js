import { useMedia } from "react-use";

export const mq = {
  xxxs: `0`,
  xxs: `200`,
  xs: `320`,
  s: `400`,
  sl: `480`,
  sl2: `580`,
  m: `768`,
  ml: `992`,
  l: `1100`,
  xl: `1200`,
  xxl: `1300`,
  xxxl: `1400`,
  xxxxl: `1500`,
  xxxxxl: `1600`,
  xxxxxxl: `1700`
};

export const MQ = (min, max) => {
  if (!min && !max) {
    return ``;
  } else if (min && !max) {
    return `only screen and (min-width: ${min}px)`;
  } else if (!min && max) {
    return `only screen and (max-width: ${max - 1}px)`;
  } else {
    return `only screen and (min-width: ${min}px) and (max-width: ${max -
      1}px)`;
  }
};

const useResponsive = ({
  mobileQuery = MQ(mq.xxxs, mq.s),
  tabletQuery = MQ(mq.s, mq.m),
  desktopQuery = MQ(mq.m)
} = {}) => {
  const isMobile = useMedia(mobileQuery);
  const isTablet = useMedia(tabletQuery);
  const isDesktop = useMedia(desktopQuery);
  const isPortrait = useMedia(`only screen and (orientation: portrait)`);
  const isLandscape = !isPortrait;
  const orientation = isPortrait ? "portrait" : "landscape";

  return {
    isMobile,
    isTablet,
    isDesktop,
    isPortrait,
    isLandscape,
    orientation
  };
};

export default useResponsive;
