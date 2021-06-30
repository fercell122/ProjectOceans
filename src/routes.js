import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Landing from "./pages/Landing/index.js"
import Evolution from "./pages/Evolution/index.js";
import Nomear from "./pages/Nomear/index.js";
import Habilidades from "./pages/Habilidades/index.js";
import Parabens from "./pages/Parabens/index.js";
import Final from "./pages/Final/index.js";



function Routes(){
    return(
        <BrowserRouter>
        <Route path="/" exact component={Landing} /> 
        <Route path="/evolution" exact component={Evolution}/> 
        <Route path="/nomear" exact component={Nomear}/> 
        <Route path="/habilidades" exact component={Habilidades}/> 
        <Route path="/parabens" exact component={Parabens}/> 
        <Route path="/final" exact component={Final}/> 
        </BrowserRouter>
    );
}

export default Routes;