
import React, { useState, useEffect } from "react"; 
import Card from "./components/Cards.jsx";
import api from "./services/api.js";



function Procurar() {
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
        
    function procurar(e) {
        e.preventDefault();
        setSearch(e.target.value);
        Api();
    }

    return ( 
        <div>
        <input style={{width: 200, heigh: 200, margin: "5px"}}
        type="text"
        name="search"
        onChange={procurar}
        placeholder="Procurar.."
      />

     <button onClick={procurar}>Procurar</button>
      
        
      <div style={{display: "flex", flexWrap: "wrap" }}>
         {products.map((produtos) => {
          return (
              
              
                <Card 
                    name={produtos.name} 
                    type={produtos.type}
                 />                   
          )
         })}
        </div>

        </div>
        
    )

}

export default Procurar;