import SendIcon from '@mui/icons-material/Send'
import { Button } from '@mui/material'

import Header from '@/components/Header'

import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'

import './App.css'

function App() {
	// const [count, setCount] = useState(0)

	return (
  <>
    <div>
      <Header />
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank" rel="noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <div className="card">
      <Button sx={
        {
          color: 'white',
          backgroundColor: 'Crimson'
        }
      } variant='outlined' endIcon={<SendIcon />}>
        XABLAu
      </Button>
      <p>
        Edit 
        {' '}
        <code>src/App.tsx</code>
        {' '}
        and save to test HMR
      </p>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  </>
	)
}

export default App
