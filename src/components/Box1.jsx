import "./Squard1.css"
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import { useState } from "react";
import { display } from "@mui/system";
import { AlignHorizontalCenterRounded } from "@mui/icons-material";
const Box1= ({colorMode, chooseProblem, chooseIdeia, chooseOutros})=> {


return (

    <>
    <div className={colorMode === true ? "square" : "lightSquare"}> 
    <div className="closedisplay">
    <p className={colorMode === true ? "darkTitle2" : "lightTitle2"}> Deixe seu FeedBack </p> 
    <CloseIcon sx={colorMode === true ? { color:"#A1A1AA", } : { color:"#000000", }}/>
    </div>



<div className="type3">

<button className="hollowButton" onClick={chooseProblem}> 
<div className={colorMode === true ? "type2light" : "type2" }> 
<div className="title1"> Problema </div> 
<div className= "emoji"> 👿 </div>
</div> 
</button>

<button className="hollowButton" onClick={chooseIdeia}> 
<div className={colorMode === true ? "type2light" : "type2" }> 
<div className="title2"> Ideia </div> 
<div className= "emoji"> ✨ </div>
</div>
</button>

<button className="hollowButton" onClick={chooseOutros}> 
<div className={colorMode === true ? "type2light" : "type2" }> 
<div className="title3"> Outros </div> 
<div className= "emoji"> 👀</div>
</div> 
</button>


</div>

    <div className={colorMode ? "footer2" : "footerLight2"}>
    Feito com ♥ pela Rocketseat
    </div>
    
    
    
    </div>

    
    </>
)

}

export default Box1;