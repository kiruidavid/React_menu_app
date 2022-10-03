import React from "react"; 
import Pages from "./pages/Pages"; 
import Category from "./components/Category"; 
import Search from "./components/Search";
import {BrowserRouter} from 'react-router-dom' 
import styled from "styled-components"; 
import {Link} from 'react-router-dom' 
import {SiCodechef} from 'react-icons/si'

function App() {
  return (
    <div className="App">  
      <BrowserRouter>  
      <Nav>
        <SiCodechef/>
        <Logo to={'/'}>My Menu App</Logo>
      </Nav>
      <Search/>
      <Category/>
     <Pages/> 
     </BrowserRouter>
    </div>
  );
} 
const Logo = styled(Link)` 
text-decoration: none; 
font-size: 1.5rem; 
font-weight: 400; 

` 
const Nav = styled.div` 
padding: 4rem 0rem; 
display: flex; 
justify-content: flex-start; 
align-items: center; 
svg{
  font-size: 2rem;
}
`

export default App;
