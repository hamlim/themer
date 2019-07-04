// /** @jsx jsx */
// import { jsx, css } from '@emotion/core'
// import { Link as RouterLink } from '@reroute/browser'
//
// function preventNavigation(event) {
//   event.preventDefault()
//   event.stopPropagation()
// }
//
// function noop() {}
//
// function applyToAll(...fns) {
//   return function(...value) {
//     fns.forEach(fn => fn && fn(...value))
//   }
// }
//
// export function Link(props) {
//   return (
//     <RouterLink
//       css={css`
//         color: inherit;
//       `}
//       {...props}
//       onClick={applyToAll(props.onClick, props.disabled && preventNavigation)}
//     />
//   )
// }
