import React from 'react';
import VideoLops from "../../components/videoloop/video.js";
import LogoContainer from '../../components/LogoContainer/index.js';
import TextoContainer from '../../components/TextoContainer/index';
import ButtonC from "../../components/ButtonContainer/index";
import "./styles.css";



function Landing(){




    return(
        <div>
            <VideoLops />  
            <LogoContainer />
            <TextoContainer 
            subtitle="Developers Oceaning"
            title="Faça parte do time de Desenvolvimento da agência Oceaning"
            />
           <div className="button-container1">
               <ButtonC lank="/evolution" title="INSCREVA-SE ->"/>
           </div>
        </div>
    )
}

export default Landing;
