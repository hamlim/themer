import { spaceReducer, isValue, appReducer } from "../reducers.js";

// isValue

test("isValue reports true for values that may be falsey", () => {
  expect(isValue(0)).toBe(true);
});

test("isValue reports true for regular values", () => {
  expect(isValue(2)).toBe(true);
});

test("isValue reports false if the value is undefined", () => {
  expect(isValue()).toBe(false);
});

test("isValue reports false if the value is null", () => {
  expect(isValue(null)).toBe(false);
});

// Space Reducer
test("spaceReducer supports adding new space values", () => {
  const initialState = [1, 2];
  expect(spaceReducer(initialState, { type: "add", payload: 4 })).toEqual([
    1,
    2,
    null,
    null
  ]);
});

test("spaceReducer supports adding space values without a default state", () => {
  expect(spaceReducer(null, { type: "add", payload: 4 })).toEqual([
    null,
    null,
    null,
    null
  ]);
});

test("spaceReducer supports updating a value within the state", () => {
  const initialState = [1, 2];
  expect(
    spaceReducer(initialState, {
      type: "update",
      index: 1,
      value: 3
    })
  ).toEqual([1, 3]);
});

test("spaceReducer throws on invalid actions", () => {
  expect(() => spaceReducer(null, { type: "FOO" }))
    .toThrowErrorMatchingInlineSnapshot(`
"Invalid action dispatched to spaceReducer: {\\"type\\":\\"FOO\\"}.

Allowed actions are: 'update', 'add'."
`);
});

// App Reducer

test("appReducer supports updating the space value in state", () => {
  expect(
    appReducer({}, { type: "update-space", payload: [0, 2, 4, 6] })
  ).toEqual({
    space: [0, 2, 4, 6]
  });
});

test("appReducer throws on invalid actions", () => {
  expect(() => appReducer({}, { type: "FOO" }))
    .toThrowErrorMatchingInlineSnapshot(`
"Invalid action dispatched to appReducer: {\\"type\\":\\"FOO\\"}.

Allowed actions are: 'update-space'."
`);
});
