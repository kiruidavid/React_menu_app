import React, {useState,useEffect} from "react"; 
import styled from "styled-components" 
import { Splide, SplideSlide } from '@splidejs/react-splide'; 
import '@splidejs/react-splide/css' 

function Popular(){ 
    const [popular, setPopular] = useState([])
    useEffect(() => {
        getPopular()
    },[])
    function getPopular(){ 
        const check = localStorage.getItem("popular") 
        if(check){
            setPopular(JSON.parse(check))
        } else{ 
            fetch(`https://api.edamam.com/search?q=popular&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json()) 
            .then((result) => { 
                 localStorage.setItem("popular", JSON.stringify(result.hits))
                   console.log(result)
                   setPopular(result.hits)
             })

        }
      
         

        
       
    }
    return(
        <Wrapper> 
            <h3>Popular Picks</h3>
            <Splide  
              options={ {
                perPage: 4, 
                arrows: false, 
                pagination: false, 
                drag: "free", 
                gap: "5rem"
              }}
            >
               
                {popular.map((pop) => ( 
                    <SplideSlide key={Math.random() * 100}> 
                    <Card >
                    <p>{pop.recipe.label}</p> 
                    <img src={pop.recipe.image} alt={pop.recipe.label}/> 
                    <Gradient />
                    </Card>


                    </SplideSlide>
                 
                ))}

              
            </Splide>
       
        </Wrapper>
    )

}  
const Wrapper = styled.div ` 
 margin: 4rem 0rem; 
 h3{
    text-align: center; 
    font-size: 40px;
 }
`;
const Card = styled.div ` 
min-height: 25rem; 
border-radius: 2rem; 
overflow: hidden; 
position: relative;

img{
    border-radius: 2rem; 
    position:absolute; 
    left:0;
    width:100% 
    height:100% 
    object-fit:cover;
} 
p{
    position:absolute; 
    z-index: 10; 
    left: 50%; 
    bottom: 0; 
    transform: translate(-50%, 0%); 
    color:green; 
    width:100%; 
    text-align:center; 
    font-weight: 600; 
    font-size:1rem; 
    height:40%; 
    display:flex; 
    justify-content:center; 
    align-items:center;
}
` 
const Gradient = styled.div` 
z-index: 3; 
position: absolute; 
width: 100%; 
height: 100%; 

`
export default Popular