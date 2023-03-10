import { useState } from "react";
import SearchBox from "./subcomponent/SearchBox/SearchBox";
import SearchResults from "./subcomponent/SearchResults/SearchResults";
import "./index.css";
import data from "../data/users.json";



function ComponentSearchFirs() {
  const [isButton, setIsButton] = useState(true);
  const [isAtTop, setIsAtTop] = useState(false);
  /** */
  const [usersData, setUsersData] = useState(data);
  const [results, setResults] = useState([]);
  /** Funciones que se ejecutaran al ser llamadas por el manejador de evento */
  const handleCloseSearchClick = () => {
    /**Se controla el comportamiento del boton Cerrar */
    if(results){
        setIsAtTop(!isAtTop);
        setResults([]);
        setIsButton(isButton);
        
    } 
    setResults([]);
    setIsButton(true);
  };


  const handleSearchClick = (searchText) =>{
    /**Se controla el comportamiento del boton Buscar */
    if(!searchText){
        setIsAtTop(isAtTop);
        setResults([]);
        alert("Ingrese un valor valido para la busqueda")
       
    }
    else{
        setIsAtTop(true);
        setIsButton(!isButton);
        if (usersData?.length) {
            const searchTextMin = searchText.toLowerCase();
            const filteredData = usersData.filter((value)=>{
               return (
                  value.name.toLowerCase().includes(searchTextMin)||
                  value.phone.toLowerCase().includes(searchTextMin)||
                  value.email.toLowerCase().includes(searchTextMin)||
                  value.username.toLowerCase().includes(searchTextMin)
               )
            });
            setResults(filteredData);
        }
    }
    

  }
  /** Le paso al componente hijo funciones como propiedades onSearch, onClose*/
  return (
    <div
      /**Estilo condicional si la condicion  se cumple me va a cambiar la posiscion*/
      className={`search ${isAtTop ? "search--top" : "search--center"}`}
    >
      <SearchBox  
        onSearch={handleSearchClick}
        onClose={handleCloseSearchClick}
        disButton ={isButton}
        isState ={isAtTop}
      />
      <SearchResults results={results} isState ={isAtTop}/>
    </div>
  );
}

export default ComponentSearchFirs;
