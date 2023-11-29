import styles from "./Card.module.css"


import styles from './Card.module.css'

export default function Card(props) {
   return (
      <div>
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin.name}</h2>
         <img src={props.image} /> 
      </div>
   );
}

// initial commit
// comment
// hojas de estilos de principales componentes
// importacion hoja de estilos a componentes