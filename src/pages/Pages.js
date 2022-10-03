import React from "react"; 
import Home from "./Home"; 
import Meal from "./Meal";
import {Routes,Route} from 'react-router-dom'

function Pages(){ 
    return(
        
         <Routes> 
          <Route path="/" element={<Home/>}/> 
          <Route path="/meal/:type" element={<Meal/>}/>

        </Routes>
       
        
    )

} 
export default Pages