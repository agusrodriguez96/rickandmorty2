import SearchBar from '../searchbar/SearchBar';
import style from './Nav.module.css'

export default function Nav(props) {
   return (
      <div className={style.container}>
         <SearchBar onSearch={props.onSearch} />
      </div>
   );
}
