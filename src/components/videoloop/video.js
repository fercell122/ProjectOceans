import React from "react"



export default function videlop(){
    return(
        <video 
        autoPlay
        loop muted
        style={{
            "position":"absolute",
            "width":"100%",
            "left":"50%",
            "top":"50%",
            "height":"100%",
            "objectFit":"cover",
            "transform":"translate(-50%, -50%)",
            "zIndex":"-1",
             }}>
            <source src="https://videolopp.s3.amazonaws.com/fl.mp4" type="video/mp4"/>
        </video>
    )
}