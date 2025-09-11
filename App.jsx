import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FirstComponent from './components/FirstComponent';
import Challenge from './components/Challenge';
import Counter from './components/Counter';
import ShowMessage from './components/ShowMessage';
import Greeting from './components/Greeting';
import RandomNumber from './components/RandomNumber';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <FirstComponent />
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <div classname="App">
        <h2> Olá mundo </h2>
        <FirstComponent />
        <TemplateExpressions />
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <Greeting name="Carolina"></Greeting>
        <Greeting name="Friederick"></Greeting>
        <Greeting name="Draculaura"></Greeting>
        <Greeting name="Stoker"></Greeting>
      </div>

      return <RandomNumber />
    </>
  );
}

export default App;