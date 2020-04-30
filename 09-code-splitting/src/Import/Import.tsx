import React from 'react'

function Import() {
  import('./Math').then(math => { // Lazy
    console.log(math.add(16, 26));
  });
  return (
    <div>
      Import Example
    </div>
  )
}

export default Import
