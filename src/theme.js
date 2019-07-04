const breakpoints = ['20em', '40em', '60em', '80em']

let theme = {
  space: [0, 2, 4, 6, 8, 10, 20, 40, 80],
  fontSizes: [14, 18, 24, 32, 40],
  colors: {
    primary: '#79e4a6',
    secondary: '#7db9e5',
    white: '#ffffff',
    black: '#000000',
    lightGrey: '#ebedee',
    mediumGrey: '#cfd3d6',
    darkGrey: '#97a1a7',
  },
  breakpoints,
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
    xLarge: `@media screen and (min-width: ${breakpoints[2]})`,
  },
  radii: ['4px', '1em', '50%'],
}

export default theme
