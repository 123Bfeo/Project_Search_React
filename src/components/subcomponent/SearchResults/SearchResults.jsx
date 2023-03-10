/**Component que me mostrar el result de la busqueda*/
import { useState } from "react";
import SearchItemResult from "../SearchItemResult/SearchItemResult";


/**Recibe como parametro la p´ropiedad result enviada desde el componente padre  */
function SearchResults({ results, isState}) {

  return (
    <div className={`${isState? "father-items": "target-Items"}`}>
      {results.map((value) => { 
        return <SearchItemResult key={value.id} {...value}/> ;
      })}
    </div>
  );
}

export default SearchResults;
