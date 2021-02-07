import React from "react";

function Header(props){
   
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">User Directory</h1>
                <form className="form-inline my-2 my-lg-0">
                <input 
                className="form-control mr-sm-2"
                type="text" 
                placeholder="Search"
                id="Search"
                >
                    
                </input>
                 <button className="btn btn-secondary my-2 my-sm-0"
                  type="submit" onClick={props.search }>Search</button>
                </form>
                
                
            </div>
        </div>

    );
}


export default Header;
