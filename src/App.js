import './App.css';

// import React, { useState } from 'react';
function App() {

  // const [inp1, setInp1] = useState('');
  // const [inp2, setInp2] = useState('');
  // const setData = () => {
  //   const output1 = inp1 && inp2 ? alert("send") : alert("none");
  // };
    const handleClick = () => {
      window.location.href = "tel:+12345678";
    };
  return (
    <div className="app">
      {/* <input type="text" value={inp1} onChange={(e) => setInp1(e.target.value)} />
      <input type="text" value={inp2} onChange={(e) => setInp2(e.target.value)} />
      <button onClick={setData}>click</button> */}

        <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;