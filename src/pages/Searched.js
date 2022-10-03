import React, {useState, useEffect} from 'react' 
import styled from 'styled-components' 
import {Link,useParams} from 'react-router-dom'

function Searched() { 
    const [searchedMeal, setSearchMeal] = useState([])  
    let params = useParams() 
    
    function getSearchedMeal(name){
        fetch(`https://api.edamam.com/search?q=${name}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`)
         .then((res) => res.json()) 
         .then((result) => setSearchMeal(result.hits))
    } 
    useEffect(() => {
        getSearchedMeal(params.type)
    }, [params.type])

  return (
    <Grid>
        {searchedMeal.map((item) => { 
            return (
          <Card key={Math.random() * 100}> 
            <Link to={`/recipe/${item.recipe.label}`}>
            <img src={item.recipe.image} alt={item.recipe.label}/> 
            <h4>{item.recipe.label}</h4> 
            </Link>

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

export default Searched