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
    const newEmployee = oldEmployee.filter((user) => {
      return user.name.first.toLowerCase().includes(value.toLowerCase());
    });
   
    setEmployees(newEmployee);
  }
 

  const handleSearchButton = (event) =>{
    event.preventDefault();
      console.log("clicked")
      const { value } = event.target;
    setInput(value);
    
  }
 
  
   //sorting by name
   const sort =(e)=>{
    console.log("clicked")
    const newEmployee = oldEmployee.sort((a, b) => {
      let fa = a.name.first.toLowerCase(),
          fb = b.name.first.toLowerCase();
      let comp = 0
      if (fa < fb) {
         comp= -1;
      }
      if (fa > fb) {
         comp =1;
      }
      return comp;
  });
    console.log(oldEmployee)
    setEmployees(newEmployee)
    console.log(oldEmployee)


  }

    // //sorting by email
    // const sortemail =(e)=>{
    //   console.log("clicked")
    //   const newEmployee = oldEmployee.sort((a, b) => {
    //     let fa = a.email.toLowerCase(),
    //         fb = b.email.toLowerCase();
        
    //     if (fa < fb) {
    //         return -1;
    //     }
    //     if (fa > fb) {
    //         return 1;
    //     }
    //     return 0;
    // });
    //   console.log(oldEmployee)
    //   setEmployees(newEmployee)
    //   console.log(oldEmployee)
  
  
    // }
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
            sort = {sort}
            // sort = {sortemail}
            />
            </div>
        </div>
    )
}



export default Tablecontainer

