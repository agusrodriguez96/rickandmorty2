// IMPLEMENTACIÓN DE ESTILOS AL COMPONENTE CARD.
import style from './Card.module.css'


export default function Card(props) {
   return (
      <div className={style.cardContainer}>

         <div className={style.buttonContainer}>
            <button onClick={props.onClose}>X</button>
         </div>
         
         <div className={style.dataContainer}>
            <h2>{props.name}</h2>
            <h3>{props.status}</h3>
            <h3>{props.species}</h3>
            <h3>{props.gender}</h3>
            <h3>{props.origin.name}</h3>
         </div>

            <img className={style.image} src={props.image} /> 

      </div>
   );
}

