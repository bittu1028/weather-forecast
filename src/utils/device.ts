// different size of device
const size = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
};

// data for media query
export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};
