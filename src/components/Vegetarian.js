import React, {useEffect, useState} from "react"; 
import styled from "styled-components" 
import { Splide, SplideSlide } from '@splidejs/react-splide'; 
import '@splidejs/react-splide/css' 

function Vegetarian(){ 
    const [vegetarian, setVegetarian] = useState([]) 
    useEffect(() => {
        getVegetarian()
    }, [])
    function getVegetarian(){ 
        const check = localStorage.getItem("vegetarian") 
        if(check){
            setVegetarian(JSON.parse(check))
        } else { 
            fetch(`https://api.edamam.com/search?q=vegetarian&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json()) 
            .then((result) => { 
                  localStorage.setItem("vegetarian", JSON.stringify(result.hits))
                   console.log(result.hits) 
                   setVegetarian(result.hits)
                   
             })
        }
       
           

        
      
         

        
       
    }
    return (
         <Wrapper> 
            <h3>Vegetarian Picks</h3>
            <Splide  
              options={ {
                perPage: 4, 
                arrows: false, 
                pagination: false, 
                drag: "free", 
                gap: "5rem"
              }}
            >
               
                {vegetarian.map((veg) => ( 
                    <SplideSlide key={Math.random() * 100}> 
                    <Card >
                    <p>{veg.recipe.label}</p> 
                    <img src={veg.recipe.image} alt={veg.recipe.label}/> 
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
export default Vegetarian