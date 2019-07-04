import React, { useReducer, useCallback, useEffect } from 'react'
import { spaceReducer, appReducer } from './reducers.js'
import { H1, Box, Input } from './ui/index.js'

function Main({ children }) {
  return (
    <Box as="main" maxWidth="40em" ml="auto" mr="auto" mt={8}>
      {children}
    </Box>
  )
}

function NumberInput({ value, label, onChange, ...rest }) {
  let handleChange = useCallback(event => {
    const {
      target: { value },
    } = event
    onChange(Number(value))
  }, [])
  return (
    <Box {...rest} as="label">
      {label}
      <Input onChange={handleChange} value={value} type="number" />
    </Box>
  )
}

function Space({ update }) {
  const [space, dispatch] = useReducer(spaceReducer, null)
  useEffect(() => {
    update({
      type: 'update-space',
      payload: space,
    })
  }, [space])
  if (space && space.length) {
    return (
      <Box display="block">
        <NumberInput
          value={space ? space.length : 0}
          key="number"
          label="Number of space values in the system"
          onChange={value => dispatch({ type: 'add', payload: value })}
        />
        {space.map((val, index) => (
          <Box key={index}>
            <NumberInput
              mx={2}
              my={4}
              value={val || 0}
              label={`Space value at index: ${index}`}
              onChange={value => dispatch({ type: 'update', index, value })}
            />
          </Box>
        ))}
      </Box>
    )
  }
  return (
    <Box display="block">
      <NumberInput
        value={space ? space.length : 0}
        key="number"
        label="Number of space values in the system"
        onChange={value => dispatch({ type: 'add', payload: value })}
      />
    </Box>
  )
}
export default function App() {
  const [state, dispatch] = useReducer(appReducer, {})
  return (
    <Main>
      <H1>Testing</H1>
      <Space update={dispatch} />
      <Box as="pre">{JSON.stringify(state, null, 2)}</Box>
    </Main>
  )
}
