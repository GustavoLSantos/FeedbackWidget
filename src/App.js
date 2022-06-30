import './App.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {useState} from "react";
import Box from "./components/Box";
import Box1 from './components/Box1';
import Box3 from './components/Box3';
import axios from 'axios';
import qs from "qs";


function App() {

  const [colorType, setColorType] = useState(true)
  const [step, setStep] = useState(1)
  const [feedbackType, setFeedbackType] = useState("problema")
  const [ dadotexto, setdadotexto] = useState("")

  
const postfeedback = async(reclamacao) => {
      await axios.post("http://localhost:3333/create", qs.stringify({
        reclamacao:reclamacao
      })
)
      .then(function(response){
        console.log.apply("FeedBack criado", response)
      })
      .catch(function(error) {
        console.error(error)
      })
}





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
    <div className= "font" onClick={() => setColorType(!colorType) }> 
    {colorType === true ? 
    <p className='darkTitle'>Dark Mode <DarkModeIcon className='moonsize' fontSize='5000px'/></p>
    :
    <p className='lightTitle'>Light Mode <WbSunnyIcon className='moonsize' fontSize='5000px'/></p>
  }
    </div>
    <div className="linha"/>

  <div>
    {step === 1 ? 
    <div className='boxRow'>
      <Box1 colorMode={colorType} chooseProblem={() => changeToProblem()} chooseIdeia={() => changeToIdeia()} chooseOutros={() => changeToOutros()}/> 
    </div>
: step === 2 ?
    <div className='boxRow'>
      { feedbackType === "problema" ?
      <Box tipo={"problema"} colorMode={colorType} stepBack={() => setStep(1)} stepForward={() => setStep(3) & postfeedback(dadotexto)} setdadotexto={setdadotexto} />
      : feedbackType === "ideia" ?
      <Box tipo={"ideia"} colorMode={colorType} stepBack={() => setStep(1)} stepForward={() => setStep(3) & postfeedback(dadotexto)} setdadotexto={setdadotexto} />
      : 
      <Box tipo={"outro"} colorMode={colorType} stepBack={() => setStep(1)} stepForward={() => setStep(3) & postfeedback(dadotexto)} setdadotexto={setdadotexto} />
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
