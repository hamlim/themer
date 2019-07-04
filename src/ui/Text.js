/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Box } from './Box'

export function Text(props) {
  return <Box as="p" fontSize={1} {...props} />
}
