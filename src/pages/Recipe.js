import React, {useState, useEffect} from 'react' 
import styled from 'styled-components' 
import {useParams} from 'react-router-dom'

function Recipe() { 
    const [details, setDetails] = useState({}) 
    const [activeTab,setActiveTab] = useState("instructions")
    const params = useParams()
    function getDetails(){ 
        fetch(`https://api.edamam.com/search?q=${params.name}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`) 
        .then(res => res.json()) 
        .then(result => {
            console.log(result.hits[0].recipe) 
            setDetails(result.hits[0].recipe)
         
        })
        
    } 
    useEffect(() => {
        getDetails()
    }, [params.name]) 

  return (
    <DetailWrapper>
        <div>
            <h2>{details.label}</h2> 
            <img src={details.image} alt={details.label}/>
        </div> 
            <Info>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredients</Button> 
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instructions</Button>
            {activeTab === 'instructions' && ( 
                <p> 
                
                {details.ingredientLines}
 
             </p> 

            )}
           {activeTab === 'ingredients' && (
            <ul>
                {details.ingredients.map((ingredient) => (
                    <li key={Math.random() * 100}>{ingredient.text}</li>
                ))}
            </ul>
           )}
          
           
            
           </Info>
    </DetailWrapper>
  )
} 
const DetailWrapper = styled.div` 
margin-top: 10rem; 
margin-bottom: 5rem; 
display: flex; 
.active {
    background: linear-gradient(45deg, blue, black); 
    color: white; 
}
h2 {
    margin-bottom: 2rem; 
} 
li {
    font-size: 1.2rem; 
    line-height: 2.5rem
} 
ul { 
    margin-to: 2rem;

}
` 
const Button = styled.div` 
padding: 1rem 2rem; 
color: gray; 
background: white; 
border: 2px solid black; 
margin-right: 2rem; 
font-weight: 600;
` 
const Info = styled.div` 
margin-left: 10rem;
`

export default Recipe