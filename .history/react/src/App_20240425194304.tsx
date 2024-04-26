import { useState } from 'react'
import { UserCircleIcon } from '@heroicons/react/16/solid'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='bg-purple-500 text-white'>
    <UserCircleIcon className="w-3 h-3" />
      </div>
     
  
  )
}

export default App
