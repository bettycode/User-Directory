import React,{useEffect, useState} from "react";
import Header from "./Header";
import Table from "./Table";
import API from "../components/API";


 function Tablecontainer() {
    const [employees,setEmployees] = useState([])
    const [index,setIndex]= useState([])
    console.log(employees)
    console.log(useState([]))
useEffect(() => {
    API.search() 
    .then(res =>{
     setEmployees(res.data.results)
    console.log(res.data.results)
    })
    .catch(err => console.log(err));
    

  }, [])
 
    return (
        <div>
            <Header />
            <Table 
            num={index + 1}
            employees = {employees}
            picture={employees.picture}
            name={employees.name} 
            email={employees.email}
            phone={employees.phone}
            dob={employees.location}
            
            />
            
        </div>
    )
}



export default Tablecontainer

