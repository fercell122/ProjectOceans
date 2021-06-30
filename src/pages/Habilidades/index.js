import React from 'react';
import VideoLops from "../../components/videoloop/video.js";
import LogoContainer from '../../components/LogoContainer/index.js';
import TextoContainer from '../../components/TextoContainer/index';
import ButtonC from "../../components/ButtonContainer/index";
import InputHab from "../../components/Input/inputHab"
import "./styles.css";



function Habilidades(){

   const x = JSON.parse(sessionStorage["user"])


    return(
        <div>
            <VideoLops />  
            <LogoContainer />
            <h1 style={{
                textAlign:"left",
                marginLeft:"10%",
                fontFamily:"Poppins", 
                color:"white"
                
            }}> Olá {x.name}</h1>
            <TextoContainer 
            
            title="Quais são suas habilidades?"
            paragrafo="Nos diga quais são suas habilidades para te conhecermos
            melhor"
            />
             <div className="formula">
           <InputHab />

            </div>
           <div className="button-container3">
               <ButtonC lank="/parabens" title="FINALIZAR ->"/>
           </div>
        </div>
    )
}

export default Habilidades;
