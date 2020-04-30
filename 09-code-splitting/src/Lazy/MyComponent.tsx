import React, { Suspense, lazy } from 'react'

import MyErrorBoundary from './MyErrorBoundary';

const OtherComponent = React.lazy(() => import('./OtherComponent')); // Option 1
const AnotherComponent = lazy(() => import('./AnotherComponent.js')); // Option 2

function MyComponent() {
  return (
    <div>
      <MyErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <OtherComponent />
            <AnotherComponent />
          </section>
        </Suspense>
      </MyErrorBoundary>
    </div>
  )
}

export default MyComponent
