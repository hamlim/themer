import React, { useReducer } from 'react'
import { spaceReducer, appReducer } from './reducers.js'
import { H1 } from './ui/index.js'

export default function App() {
  const [state, dispatch] = useReducer(appReducer, {})
  return <H1>Testing</H1>
}
