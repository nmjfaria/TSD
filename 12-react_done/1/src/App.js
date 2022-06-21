import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0);
  
  const inc = () => {
    setCounter(counter+1)
  }

  const dec = () => {
    setCounter(counter-1)
  }

  return (

    <div>
      Counter: {counter}
      <br />
      <button onClick={inc}>Increase</button>
      <br />
      <button onClick={dec}>Decrease</button>
    </div>
  );
}

export default App;
