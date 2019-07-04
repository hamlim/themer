/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import theme from '../theme.js'
import { VisuallyHidden } from './VisuallyHidden.js'

export function SkipNav() {
  let [focused, setFocused] = React.useState(false)

  function handleFocus() {
    setFocused(true)
  }

  function handleBlur() {
    setFocused(false)
  }

  return (
    <VisuallyHidden
      is="a"
      href="#main"
      css={
        focused &&
        css`
          position: absolute;
          left: 50%;
          top: 1em;
          transform: translateY(-50%)
          z-index: ${theme.layers.low};
          height: auto;
          width: auto;
          overflow: visible;
          clip: initial;
          &:focus {
            border: solid 2px ${theme.colors.accent};
            padding: 1em;
            border-radius: ${theme.radii.medium};
          }
        `
      }
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      Skip to Main Content
    </VisuallyHidden>
  )
}
