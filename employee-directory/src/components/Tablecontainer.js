import React,{useEffect, useState} from "react";
import Header from "./Header";
import Table from "./Table";
import API from "../components/API";


 function Tablecontainer() {
    const [employees,setEmployees] = useState([])
    
useEffect(() => {
    API.search() 
    .then(res =>{
     setEmployees(res.data.results[0])
    console.log(res.data.results[0])
    })
    .catch(err => console.log(err));

  }, [])
 
    return (
        <div>
            <Header />
            <Table 
            
            // employees = {employees}
            picture={employees.picture}
             name={employees.name} 
            email={employees.email}
            phone={employees.phone}
            dob={employees.dob}
            
            />
        </div>
    )
}



export default Tablecontainer

