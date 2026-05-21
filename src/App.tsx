import './App.css'
import { invoke } from '@tauri-apps/api/core'
import { useState } from 'react'

function App() {
  const [message, setMessage] = useState('')
  async function greet(name: string) {
    const res = await invoke('greet', { name })
    setMessage(res as string)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button 
      onClick={() => {
        greet('admin')
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >Run Rust</button>
      <h1 className="text-2xl font-bold">{message}</h1>
    </div>
  )
}

export default App