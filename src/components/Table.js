import React from 'react'



function Table(employees){
  
  const style = {
    table:{
       background: "purple",
       color: "white"
    },
    tables:{
      padding: "10px"
   },
   padding:{
     paddingLeft: "3rem"
   }
   
} 

    return (
        <table className="table table-striped"style= {style.tables}>
  <thead style= {style.table}>
    <tr>
       <th scope="col" style={style.padding}>#</th> 
      <th scope="col">Picture</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">State</th>
    </tr>
  </thead>


  <tbody>

      {employees.employees.map((employee,index) => (
        <tr key={employee.login.uuid} >
         <td style={style.padding}>{index+1}</td>
         <td><img src={employee.picture.medium}></img></td>
          <td>{employee.name.first} {employee.name.last}</td> 
         <td>{employee.email}</td>
         <td>{employee.phone}</td>
          <td>{employee.location.state}</td>  
      </tr>

        ))}   
      
 
      </tbody>
  
</table>

    );
}


export default Table;
