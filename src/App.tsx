import { useState } from 'react';
import { generateColors } from './helpers/generateColors';
import { ModalTutorial } from './components/ModalTutorial';
import './App.css';

function App() {
  const [currentColor, setCurrentColor] = useState(generateColors.simpleColor());
  const [currentType, setCurrentType] = useState("simple")
  const [copyMessage, setCopyMessage] = useState(false)
  const [tutorial, setTutorial] = useState(false)
  
  const generateSimpleColor = ()=> {
    let newColor = generateColors.simpleColor()
    if (newColor != currentColor) {
      setCurrentColor(newColor)
    } else {
      generateSimpleColor()
    }
  };

  const change = ()=> {
    switch (currentType) {
      case "simple":
        generateSimpleColor()
      break;
      case "hex":
        setCurrentColor(generateColors.hexColor())
      break;
      case "rgb":
        setCurrentColor(generateColors.rgbColor())
      break;
    }
    setCopyMessage(false)
  }
  const copyToClipboard = ()=> {
    navigator.clipboard.writeText(currentColor)
    setCopyMessage(true)
    setTimeout(()=>{
      setCopyMessage(false)
    }, 3000)
  }
  const openTutorial = ()=> {
    setTutorial(true)
  }
  const closeTutorial = ()=> {
    setTutorial(false)
  }
  

  return (
    <div>
      <header className="headerSite">
        <div className="headerSiteLeftSide">
          <h3 className="headerSiteTitle"><a href="/">Color Generator</a></h3>
        </div>
        <div className="headerSiteRightSide">
          <button title='Select to generate some colors (non-random)' className={`headerSiteTypeBtn ${currentType === 'simple' ? "active": ""}`} onClick={()=>{setCurrentType("simple")}}>
            Simple
          </button>
          <button title='Select to generate random HEX colors' className={`headerSiteTypeBtn ${currentType === 'hex' ? "active": ""}`} onClick={()=>{setCurrentType("hex")}}>
            Hex
          </button>
          <button title='Select to generate random RGB colors' className={`headerSiteTypeBtn ${currentType === 'rgb' ? "active": ""}`} onClick={()=>{setCurrentType("rgb")}}>
            RGB
          </button>
        </div>
      </header>
      <main className="mainContent" style={{backgroundColor: currentColor}}>
        <div className="currentColorArea">
          <p>Color : <span className="currentColorText" title='Click to copy' onClick={copyToClipboard}> {currentColor} </span></p>
        </div>
        <div className='buttonsArea'>
          <button className="changeColorBtn" style={{backgroundColor: currentColor}} onClick={change}>Change</button>
          {!copyMessage && <button className="copyColorBtn" style={{backgroundColor: currentColor}} onClick={copyToClipboard}>Copy</button>}
          {copyMessage && <div className='copyMessage'>
            Copied
            <img src="/check_white_24dp.svg" alt="OK" />
          </div>}
        </div>
        <button className='howToUseBtn' onClick={openTutorial}>?</button>
        {tutorial && <ModalTutorial closeTutorial={closeTutorial}/>}
      </main>
    </div>
  )
}

export default App
