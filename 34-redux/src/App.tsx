import React from 'react'

import { SerieStore } from './serie/store/SerieStore';
import Serie from './serie/Serie';

function App() {
  return (
    <div>
     <SerieStore>
       <Serie />
     </SerieStore>
    </div>
  )
}

export default App;
