import './App.css';
import Cards from './components/cards/Cards.jsx';
import characters from './data.js';
import Nav from './components/nav/Nav.jsx';

function App() {
   return (
      <div className='App'>
         <div>
         <Nav/>
         </div>
         
         <div>
         <Cards characters={characters} />
         </div>
        
      </div>
   );
}

export default App;


// comment nuevo favicon 