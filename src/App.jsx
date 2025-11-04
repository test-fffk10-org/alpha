import { useCountStore } from './store'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const { count, increment, decrement, reset } = useCountStore()

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="flex gap-2 justify-center mb-4">
          <button onClick={decrement} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            -
          </button>
          <button onClick={increment} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            +
          </button>
          <button onClick={reset} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Reset
          </button>
        </div>
        <p className="text-2xl font-bold">count is {count}</p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
