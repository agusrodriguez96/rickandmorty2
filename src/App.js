import './App.css';
import Cards from './components/cards/Cards.jsx';
import characters from './data.js';
import Nav from './components/nav/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';


function App() {

   const [characters, setCharacters] = useState([]);
  
   function onSearch(id) {
      const apiKey = 'pi-agusrodriguez96'; // Reemplaza esto con tu clave de API
      axios(`https://rickandmortyapi.com/api/character/${id}?key=${apiKey}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      ).catch(error => {
         console.error('Error fetching data:', error);
      });
   }


   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== id))
   }
   return (
      <div className='App'>
         <div>
         <Nav onSearch={onSearch}/>
         </div>
         
         <div>
         <Cards characters={characters} onClose={onClose} />
         </div>
        
      </div>
   );
}

export default App;


// comment nuevo favicon 