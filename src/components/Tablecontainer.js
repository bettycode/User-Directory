import React,{useEffect, useState} from "react";
import Header from "./Header";
import Table from "./Table";
import API from "../components/API";


 function Tablecontainer() {
    const [employees,setEmployees] = useState([])
    const [oldEmployee, setOldEmployee] = useState([]);
    const [index,setIndex]= useState([])
     const [input,setInput]= useState("")
    // console.log(employees)
  

useEffect(() => {
    API.search() 
    .then(res =>{
     setEmployees(res.data.results)
     setOldEmployee(res.data.results)
    console.log(res.data.results)
    })
    .catch(err => console.log(err));
    

  }, [])
 
  const handleSearchInput =(event) =>{
    // setInput(event.target.value);
    const { value } = event.target;
    setInput(value);
    const newEmployee = oldEmployee.filter((person) => {
      return person.name.first.toLowerCase().includes(value.toLowerCase());
    });
    setEmployees(newEmployee);
  }
 

  const handleSearchButton = (event) =>{
    event.preventDefault();
      console.log("clicked")
  }
  
    return (
        <div>
            <Header 
            handleSearchInput = {handleSearchInput}
            handleSearchButton ={handleSearchButton}
            input = {input}
           
           />
           <div className ="container-fluid"   style={{ paddingLeft:0, paddingRight:0 }} >
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
        </div>
    )
}



export default Tablecontainer

