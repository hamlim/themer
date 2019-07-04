import React, { useReducer } from "react";

import { spaceReducer, appReducer } from "./reducers.js";

export default function App() {
  const [state, dispatch] = useReducer(appReducer, {});
  return <h1>Testing</h1>;
}
