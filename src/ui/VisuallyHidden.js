/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Box } from './Box'

export function VisuallyHidden({ is: as, ...rest }) {
  return (
    <Box
      as={as}
      css={css`
        position: absolute;
        height: 1px;
        width: 1px;
        overflow: hidden;
        clip: rect(1px 1px 1px 1px);
        clip: rect(1px, 1px, 1px, 1px);
      `}
      {...rest}
    />
  )
}
