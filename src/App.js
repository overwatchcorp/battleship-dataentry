import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const row = new Array(10).fill(0);
const g = new Array(10).fill(row);

function App() {
  const [grid, setGrid] = useState(g);

  const cycleValue = (iX, iY) => {
    console.log('HIIII')
    const newGrid = grid.map((c, y) => c.map((v, x) => {
      if (x === iX && y === iY) {
        const newVal = v === 0 ? -1 : v === -1 ? 1 : 0;
        return newVal
      } return v
    }))

    setGrid(newGrid);
  }

  const buttons = []
  grid.forEach((c, y) => c.forEach((v, x) => {
    buttons.push(<button 
        className='grid-item'
        type='button'
        onClick={() => cycleValue(x, y)}
      >
      {
        v === -1 ? '⚫':  null
      }
      {
        v ===  0 ? '🌊' :  null
      }
      {
        v ===  1 ? '❌' :  null
      }
      </button>)
    if (x === 9) buttons.push(<br />)
  }))
  return (
    <div className="app">
      <div style={{ marginRight: '1rem'}}>
        {buttons}
      </div>
      <div className='data-grid'>
          {JSON.stringify(grid)}
      </div>
    </div>
  );
}

export default App;
