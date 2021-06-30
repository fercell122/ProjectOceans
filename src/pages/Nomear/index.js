import React from 'react';
import VideoLops from "../../components/videoloop/video.js";
import LogoContainer from '../../components/LogoContainer/index.js';
import TextoContainer from '../../components/TextoContainer/index';
import ButtonC from "../../components/ButtonContainer/index";
import InputName from "../../components/Input/inputName";
import "./styles.css";



function Nomear(){

  


    return(
        <div>
            <VideoLops />  
            <LogoContainer />
            <TextoContainer 
            subtitle="Vamos começar"
            title="Como devemos te chamar?"
            paragrafo="Nos diga como devemos te chamar e qual é o seu e-mail para que 
            possamos te enviar novidades"
            />
            <div className="formulator">
           <InputName />

            </div>
            
           <div className="button-container2">
               <ButtonC lank="/habilidades" title="CONTINUAR ->"/>
           </div>
        </div>
    )
}

export default Nomear;
