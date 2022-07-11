
import React, { useState } from 'react';
import data from './Data.json';

import './style.css';

const Main = () => {
 const [searchTerm,setSearchTerm]=useState("");
  return (
    <>
    
      <div className='header'>
        
         <div className="search_bar">
           <input type='text' placeholder='Search'
           onChange={(event)=>{
            setSearchTerm(event.target.value);
           }}/>
           <button><i class="fa-solid fa-magnifying-glass"></i></button>
         </div>
      </div> 
     
         
       
        <div className="box">
          <div className='container'>
            <h2>Search Results</h2>
            <select className='option_b'><option >BRAND</option></select>
            <p><input type="checkbox"></input>Mango</p>
            <p><input type="checkbox"></input>H&M</p>
            
            <select className='option_b'><option >PRICE RANGE</option></select>
            <p><input type="checkbox"></input>Under 5000</p>
            <p><input type="checkbox"></input>1000 To 3000</p>
            
            <select className='option_b'><option >RATINGS</option></select>
            <p><input type="checkbox"></input>&#11088; &#11088; &#11088; &#11088; &#11088;</p>
            <p><input type="checkbox"></input>&#11088; &#11088; &#11088; &#11088; &#9734; </p>
            <p><input type="checkbox"></input>&#11088; &#11088; &#11088; &#9734; &#9734;</p>
            <p><input type="checkbox"></input>&#11088; &#11088; &#9734;  &#9734; &#9734;</p>
            <p><input type="checkbox"></input>&#11088; &#9734; &#9734; &#9734; &#9734;</p>

          </div>
         <div className='Data_container'>
          {
            data.filter((val)=>{
              if(searchTerm==""){
                   return val;
              }else if(val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return val;
              }
            })
            .map((val)=>{
              return(
                <div className='template' key={val.id}>
                  
                  <img className="image" src={val.image} alt=""/>
                     
                      
                  <h3>{val.title}</h3>
                  <p className="price">{val.price}</p>
                  <p>&#11088; &#11088; &#11088; &#11088; &#11088; (210)</p>

                </div>
             
                

              )
            })
          }
          </div>
          </div>
     
    </>
  )
}

export default Main