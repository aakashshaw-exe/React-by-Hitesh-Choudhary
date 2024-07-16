import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");
  const [randomBackground, setRandomBackground] = useState("#ffffff");

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    let newColor = "#";

    for (let i = 0; i < 6; i++) {
      newColor += hexRange[Math.floor(Math.random() * 16)];
    }

    setColor(newColor);
    setRandomBackground(newColor);
    document.body.style.backgroundColor = newColor;
  };
// just for fun to change the background color automatically every 2 seconds without clicking the "RandomBg" 
  // useEffect( () => {
  //   const intervalID = setInterval(generateColor, 3000);
  //   return () => clearInterval(intervalID);
  // },[]);

  const buttonStyles = {
    padding: '8px 16px',
    borderRadius: '9999px',
    color: 'white',
    cursor: 'pointer',
    marginRight: '8px',
  };

  const randomBgButtonStyles = {
    ...buttonStyles,
    color: 'black',
    
    backgroundColor: randomBackground,
  };

  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} style={{ ...buttonStyles, backgroundColor: 'red' }}>Red</button>
          <button onClick={() => setColor("blue")} style={{ ...buttonStyles, backgroundColor: 'blue' }}>Blue</button>
          <button onClick={() => setColor("orange")} style={{ ...buttonStyles, backgroundColor: 'orange' }}>Orange</button>
          <button onClick={() => setColor("green")} style={{ ...buttonStyles, backgroundColor: 'green' }}>Green</button>
          <button onClick={() => setColor("black")} style={{ ...buttonStyles, backgroundColor: 'black' }}>Black</button>
          <button onClick={generateColor} style={randomBgButtonStyles}>RandomBg</button>
        </div>
      </div>
    </div>
  );
}

export default App;

