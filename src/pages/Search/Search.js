
import React, { useState, useEffect } from "react"; 
import Card from "../../components/Card/Cards.jsx";
import api from "../../services/api.js";
import Input from "../../components/Input/Input.jsx";



function Search() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");


    const Api = () => {
        api
          .get(
            `/autocomplete?content=${search}&source=nanook`
          )
          .then((response) => {
            setProducts(response.data.products);
            
          });
      };
    



     function handleOnChange(e) { 
      setSearch(e.target.value);

     }


    function procurar(e) {
        e.preventDefault();
        Api();
    }

    return ( 
      
        <div>
        <form onSubmit={procurar}>
        <Input 
        type="text"
        name="search"
        onChange={handleOnChange}
        placeholder="Procurar.."
      />

     <button type="submit">Procurar</button>
     </form>
      
        
      <div style={{display: "flex", flexWrap: "wrap" }}>
         {products.map((produtos) => {
          return (
              
              
                <Card key={produtos.id}
                    name={produtos.name} 
                    type={produtos.type}
                 />                   
          )
         })}
        </div>

        </div>
        
    )

}

export default Search;