import { useState } from 'react'
import { BeakerIcon } from '@heroicons/react/16/solid'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='bg-purple-500 text-white'>
    <BeakerIcon className="w-16 h-16" />
      </div>
     
  
  )
}

export default App
