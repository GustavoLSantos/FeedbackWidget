import "./Squard3.css"
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { AlignHorizontalCenterRounded } from "@mui/icons-material";
import { useState } from "react";
import { display } from "@mui/system";
const Box3= ({tipo, colorMode, stepBack})=> {


return (

    <>
    <div className={colorMode === true ? "square" : "lightSquare"}> 
    
    <div className="closedisplay2">
     <CloseIcon sx={colorMode === true ? { color:"#fff", } : { color:"#000000", }}/>
    </div>

<div className="just">
<CheckOutlinedIcon  sx={colorMode === true ? { color:"#ffff", } : { color:"#000000", }}/>
</div>

<div className={colorMode ? "queerdark" : "queerlight"}>

Obrigado pelo o FeedBack 

</div>

<button className= {colorMode ? "queerdark2" : "queerlight2"} onClick={stepBack}>
        Enviar outro FeedBack
    </button>


    <div className={colorMode ? "footer2" : "footerLight2"}>
    Feito com ♥ pela Rocketseat
    </div>
    
    
    
    </div>

    
    </>
)

}

export default Box3;