import React from 'react';
import VideoLops from "../../components/videoloop/video.js";
import LogoContainer from '../../components/LogoContainer/index.js';
import TextoContainer from '../../components/TextoContainer/index';
import ButtonC from "../../components/ButtonContainer/index";
import "./styles.css";



function Final(){

  const  x = JSON.parse(sessionStorage["user"])
  const  y = JSON.parse(localStorage["user"])


    return(
        <div>
            <VideoLops />  
            <LogoContainer />
            <div className="Container3">
            <TextoContainer 
            subtitle= "Vamos começar"
            
            />
         
               <ButtonC lank="/nomear" title="ADICIONAR ->"/>
           
           </div>


            <div className="listContainer">
            <h1>Nome :{x.name}</h1>
            <h1>Email:{x.email}</h1>
            <h1>Habilidades:{y.habilidades}</h1>
            </div>
            
           
        </div>
    )
}

export default Final;
