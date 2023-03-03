import { css, DefaultTheme } from 'styled-components';

export const size = {
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1200px',
  desktop: '1440px',
  desktopL: '2560px',
};

export const device = {
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
};

export const mixins = {
  flexSet: (
    justifyContent = 'center',
    alignItems = 'center',
    flexDirection = 'row'
  ) => css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-direction: ${flexDirection};
  `,
  stopDrag: () => css`
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `,
  imageRendering: () => css`
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
  `,
  noScrollbar: () => css`
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; //IE and Edge
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  `,
  buttonTransition: () => css`
    transition: all 0.15s ease-in-out;

    &:active:enabled {
      opacity: 0.7;
    }

    @media ${device.laptop} {
      &:hover:enabled {
        opacity: 0.7;
      }
    }
  `,
  primaryTransition: () => css`
    transition: all 0.15s ease-in-out;
    cursor: pointer;

    &:active {
      opacity: 0.7;
    }

    @media ${device.laptop} {
      &:hover {
        opacity: 0.7;
      }
    }
  `,
};

export const theme: DefaultTheme = {
  breakPoint: '768px',

  colors: {
    black: '#1e1f1d',
    yellow: '#edb83c',
    orange: '#eb7952',
    gray: '#6e6e6e',
    gray_background: '#f5f5f5',
  },
};
