import React, { useEffect, useState } from "react";

function Header({handleSearchButton,input, handleSearchInput}){

   const style = {
         container:{
            background: "purple",
            color: "white",
            marginBottom:"0"
         },
         search:{
             paddingTop: "10px"
         }
   } 
   
  

    return (
        <div className="jumbotron jumbotron-fluid"style= {style.container}>
            <div className="container">
                <h1 className="display-4">User Directory</h1>
                <form className="form-inline my-2 my-lg-0" style= {style.search}> 
                <input 
                className="form-control mr-sm-2"
                type="text" 
                placeholder="Search"
                id="Search"
                value={input}
                onChange={handleSearchInput}
                >
                    
                </input>
                 <button className="btn btn-secondary my-2 my-sm-0"
                  type="submit" onClick={handleSearchButton}>Clear</button>
                </form>
                
                
            </div>
        </div>

    );
}


export default Header;
