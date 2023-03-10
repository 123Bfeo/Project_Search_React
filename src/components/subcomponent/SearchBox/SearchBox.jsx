import { useState } from "react";
import SearchTitle from "../componentTitle/SearchTitle";

/** Resivo la propiedad enviada por el pasdre como parametros onSearch, onClose*/
function SearchBox({ onSearch, onClose, disButton, isState}) {
  const [searchText, setSearchText] = useState("");

const handlerCloseClear = ()=>{
  setSearchText("");
  onClose();
}
  return (
    <div className={`search-box ${isState? "search--size": "search-box"}`}>
      <SearchTitle/>
      <div className="search-box-input-button">
        <label>
          <input
            type="text"
            value={searchText}
            onChange={({ target: { value } }) => setSearchText(value)}
            className="search-box-input"
          />
        </label>
        <button
          /** Paso la propiedad recivida al manejador de evento para que llame esa funcion */
          className="search-box-button"
          onClick={()=>onSearch(searchText)}
        >
          Search
        </button>

        <button className="search-box-button-c search-box-button" 
         onClick={handlerCloseClear}
         disabled={disButton}>
           Delete
        </button>
      </div>
    </div>
  );
}
export default SearchBox;
