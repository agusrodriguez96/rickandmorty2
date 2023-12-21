import Card from '../card/Card';
import style from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={style.container}>
            {characters.map(character => (
               <Card
               key = {character.id}             // la key como identificador unico de cada card
               name = {character.name}
               status = {character.status}
               species = {character.species}
               gender = {character.gender}
               origin = {character.origin.name}
               image = {character.image}
               onClose={() => props.onClose(character.id)}
           
               />
            ))}
      </div>
   )
}

