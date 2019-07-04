/** @jsx jsx */
import { useState, useCallback } from 'react'
import { jsx, css } from '@emotion/core'
import { Box } from './Box'

export function Input({ unstable_Focused = false, ...props }) {
  return (
    <Box
      as="input"
      borderRadius={0}
      css={theme =>
        css({
          backgroundColor: theme.colors.lightGrey,
          border: 'none',
          height: 50,
          fontSize: theme.fontSizes[0],
          display: 'block',
          minWidth: '100%',
          padding: '0 .5em',
          ':focus': {
            outline: `dashed 1px ${theme.colors.secondary}`,
          },
          ':disabled': {
            backgroundColor: theme.colors.grey,
          },
          ...(unstable_Focused
            ? {
                outline: `dashed 1px ${theme.colors.secondary}`,
              }
            : {}),
        })
      }
      {...props}
    />
  )
}

function noop() {}

export function ControlledInput({
  onChange = noop,
  defaultValue = '',
  ...props
}) {
  let [value, setValue] = useState(defaultValue)
  let handleChange = useCallback(function handleChange(event) {
    setValue(event.target.value)
    onChange(event.target.value)
  }, [])
  return <Input {...props} value={value} onChange={handleChange} />
}
