import React, {useState, useEffect} from 'react' 
import styled  from 'styled-components' 
import { motion } from 'framer-motion' 
import {Link, useParams} from 'react-router-dom' 



 function Meal() { 
  const [meals, setMeals] = useState([])  

  let params = useParams()
  function getMeals(name){
    fetch(`https://api.edamam.com/search?q=${name}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`)
         .then((res) => res.json()) 
         .then((result) => setMeals(result.hits))
  } 
  useEffect(() => { 
    getMeals(params.type)
    console.log(params.type)
  },[params.type])
  return (
    <Grid>
      {meals.map((item) => {
        return (
          <Card key={Math.random() * 100}> 
            <img src={item.recipe.image} alt={item.recipe.label}/> 
            <h4>{item.recipe.label}</h4>

          </Card>
        )
      })}
    </Grid>
  )
} 
const Grid = styled.div` 
display: grid; 
grid-template-columns: repeat(auto-fit, minmax(20rem,1fr)); 
grid-gap: 3rem;
`
const Card = styled.div` 
img{
  width: 100%; 
  border-radius: 2rem; 
} 
a {
  text-decoration: none;
} 
h4 {
  text-align: center; 
  padding: 1rem;
}
` 

export default Meal
