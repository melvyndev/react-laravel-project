import { useState } from 'react'
import { BeakerIcon } from '@heroicons/react/16/solid'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='bg-purple-500 text-white'>
    <BeakerIcon className="w-2 h-2" />
      </div>
     
  
  )
}

export default App
