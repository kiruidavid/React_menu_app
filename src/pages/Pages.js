import React from "react"; 
import Home from "./Home"; 
import Meal from "./Meal"; 
import Searched from "./Searched"; 
import Recipe from "./Recipe";
import {Routes,Route} from 'react-router-dom'

function Pages(){ 
    return(
        
         <Routes> 
          <Route path="/" element={<Home/>}/> 
          <Route path="/meal/:type" element={<Meal/>}/> 
          <Route path="/searched/:type" element={<Searched/>}/> 
          <Route path="/recipe/:name" element={<Recipe/>}/>

        </Routes>
       
        
    )

} 
export default Pages