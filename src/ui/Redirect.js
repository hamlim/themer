// import React, { useEffect, Suspense } from 'react'
// import { useHistory } from '@reroute/core'
// import { useCache } from '@matthamlin/simple-cache'
//
// let RedirectCache = new Map()
//
// export function Redirect({ to }) {
//   let { history } = useHistory()
//   useCache(RedirectCache, to, () => {
//     return new Promise(resolve => {
//       history.push(to)
//       resolve()
//     })
//   })
//   return null
// }
//
// export function RouterSuspenseBoundary({ children }) {
//   return <Suspense fallback={null}>{children}</Suspense>
// }
