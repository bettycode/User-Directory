import React from 'react'



function Table(employees){

    return (
        <table className="table table-striped">
  <thead>
    <tr>
       <th scope="col">#</th> 
      <th scope="col">Picture</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">State</th>
    </tr>
  </thead>


  <tbody>

      {employees.employees.map((employee,index) => (
        <tr key={employee.login.uuid}>
         <td>{index+1}</td>
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
