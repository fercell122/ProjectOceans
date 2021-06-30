import React from 'react';
import VideoLops from "../../components/videoloop/video.js";
import LogoContainer from '../../components/LogoContainer/index.js';
import ButtonC from "../../components/ButtonContainer/index";
import "./styles.css";



function Evolution(){




    return(
        <div>
            <VideoLops />  
            <LogoContainer />

            <div className="text2-container">
            <h2>Time de desenvolvimento</h2>
            <h1>Sua evolução começa agora</h1>
            <p>Faça parte dessa jornada junto com 
            a Oceaning e conquiste o<br/>
                mundo com suas habilidades de programação.</p>
            </div>

           <div className="button-container">
            <ButtonC lank="/nomear" title="COMEÇAR AGORA ->"/>
           </div>
        </div>
    )
}

export default Evolution;
