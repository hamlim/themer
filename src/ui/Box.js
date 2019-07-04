import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { space, layout, flexbox, typography } from 'styled-system'

export let Box = styled('div', {
  shouldForwardProp,
})(space, layout, flexbox, typography)
