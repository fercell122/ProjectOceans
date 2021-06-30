import React from 'react';
import VideoLops from "../../components/videoloop/video.js";
import LogoContainer from '../../components/LogoContainer/index.js';

import ButtonC from "../../components/ButtonContainer/index";
import "./styles.css";



function Parabens(){




    return(
        <div>
            <VideoLops />  
            <LogoContainer />
            <div className="text3-container">
            <h2>Parabéns!</h2>
            <h1>Suas habilidades foram enviadas</h1>
            <p>Faça parte dessa jornada junto com 
            a Oceaning e conquiste o<br/>
                mundo com suas habilidades de programação.</p>
            </div>
           <div className="button-container5">
               <ButtonC lank="/final" title="VER TODOS ->"/>
           </div>
        </div>
    )
}

export default Parabens;
