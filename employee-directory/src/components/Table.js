import React from 'react'



function Table(employee){

    return (
        <table className="table table-striped">
  <thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">Picture</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>


  <tbody>

      {/* {employee.employees.map(employee => ( */}
        <tr>
         <td><img src={employee.picture}></img></td>
         {/* <td>{employee.name.first} {employee.name.last}</td> */}
         <td>{employee.email}</td>
         <td>{employee.phone}</td>
         {/* <td>{employee.dob}</td> */}
      </tr>

       {/* ))}   */}
      
 
      </tbody>
  
</table>

    );
}


export default Table;
