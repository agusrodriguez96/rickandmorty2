
import style from './SearchBar.module.css'
import { useState } from 'react';



export default function SearchBar(props) {

   const [id, setId] = useState("");

   const handleChange = e => {
      const {value} = e.target;
      setId(value)
   }

   return (
      <div className={style.container}>
         <input 
            type='search'
            name='search'
            id='search'
            onChange={handleChange}
          />
         <button onClick={() => props.onSearch(id)}>Agregar</button>    
      </div>
   );
}
