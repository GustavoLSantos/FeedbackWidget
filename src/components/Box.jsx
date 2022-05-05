import "./Squard.css"
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useState } from "react";
const Box= ({tipo, colorMode})=> {

const [feedback, setFeedback] = useState( tipo === "problema" ? "Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..." : 
tipo === "ideia" ? "Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!" : tipo === "outro" ? "Queremos te ouvir. O que você gostaria de nos dizer?" : "")

const icone = tipo === "problema" ? "👿" : tipo === "ideia" ? "✨" : tipo === "outro" ? "👀" : "";
const titulo = tipo === "problema" ? "Problema" : tipo === "ideia" ? "Ideia" : tipo === "outro" ? "Outro" : "";

return (

    <>
    <div className={colorMode === true ? "square" : "lightSquare"}> 
    <div className="closedisplay">
    <ArrowBackIcon sx={colorMode === true ? { color:"#A1A1AA", } : { color:"#000000", }}/>
    
    <p className={colorMode === true ? "darkTitle" : "lightTitle"}>{icone} {titulo}</p> 
    <CloseIcon sx={colorMode === true ? { color:"#A1A1AA", } : { color:"#000000", }}/>
    </div>
<div>
<textarea className="type" placeholder={feedback}/>
</div>

<div className="bottoncontainer"> 
    <button className={colorMode === true ? "camera" : "cameraLight"}> 
<PhotoCameraIcon sx={colorMode === true ? { color:"#FFF  ", } : { color:"#27272A  ", }}/>
    </button>
    <button className="feedback" onClick={() => setFeedback("Enviado")}>
        Enviar FeedBack
    </button>
</div>
    <div className={colorMode ? "footer" : "footerLight"}>
    Feito com ♥ pela Rocketseat
    </div>
    
    
    
    </div>

    
    </>
)

}

export default Box;