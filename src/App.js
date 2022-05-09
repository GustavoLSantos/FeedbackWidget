import './App.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {useState} from "react";
import Box from "./components/Box";
import Box1 from './components/Box1';
import Box3 from './components/Box3';
function App() {

  const [colorType, setColorType] = useState(true)
  const [step, setStep] = useState(1)
  const [feedbackType, setFeedbackType] = useState("problema")

  const changeToProblem = () => {
    setStep(2)
    setFeedbackType("problema")
  }

  const changeToIdeia = () => {
    setStep(2)
    setFeedbackType("ideia")
  }

  const changeToOutros = () => {
    setStep(2)
    setFeedbackType("outros")
  }

  return (
    
    <div className={colorType === true ? "pagina" : "paginaLight"}> 
    <div className= "font" onClick={() => setColorType(!colorType)}> 
    {colorType === true ? 
    <p className='darkTitle'>Dark Mode <DarkModeIcon className='moonsize' fontSize='5000px'/></p>
    :
    <p className='lightTitle'>Light Mode <WbSunnyIcon className='moonsize' fontSize='5000px'/></p>
  }
    </div>
    <div className="linha"/>

  <div>
    {step === 1 ? 
    <div>
      <Box1 colorMode={colorType} chooseProblem={() => changeToProblem()} chooseIdeia={() => changeToIdeia()} chooseOutros={() => changeToOutros()}/> 
    </div>
: step === 2 ?
    <div className='boxRow'>
      { feedbackType === "problema" ?
      <Box tipo={"problema"} colorMode={colorType} stepBack={() => setStep(1)} stepForward={() => setStep(3)}/>
      : feedbackType === "ideia" ?
      <Box tipo={"ideia"} colorMode={colorType} stepBack={() => setStep(1)} stepForward={() => setStep(3)}/>
      : 
      <Box tipo={"outro"} colorMode={colorType} stepBack={() => setStep(1)} stepForward={() => setStep(3)}/>
    }
    </div>
: step === 3 ?
    <div className='boxRow'> <Box3 colorMode={colorType} stepBack={() => setStep(1)}/> </div>  
: <></>
}

</div>
    </div>
    );
}
export default App;
