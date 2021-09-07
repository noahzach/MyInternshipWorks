import React,{useState} from 'react';
import { withRouter } from "react-router";
import { gql, useQuery } from '@apollo/client';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';


const AGENCY_EMPLOYEES = gql`
  query listEmployeeUnderAgency($agencyId: String!){
    listEmployeeUnderAgency(agencyId:$agencyId){
           
           data{ 
            fullName
            employeeId
            email
            phone
            department {
                name
            }
            agency {
                logo
            }
            location {
                name
            }
            seniorityLevel {
                name
            }
           
           }
            
    }
  }
`;

 function EmployeePage(props) {
    let x = (props.match.params.id)
    let z = x.substring(1);
    console.log(z)
    const details =  useQuery(AGENCY_EMPLOYEES,{
        variables:{
            agencyId: z
            
        }
    });

console.log('details -->', details)





  return (
      <div className="employeeList">
          <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center"> Phone </TableCell>
            <TableCell align="center"> Email </TableCell>
            <TableCell align="center">Department</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Seniority Level</TableCell>
            <TableCell align="center">EMP ID</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        {details.data && details.data.listEmployeeUnderAgency.data.map((item) => (
            <TableRow>
                <TableCell align="center" >{item.fullName}</TableCell>
                <TableCell align="center">{item.phone}</TableCell>
                <TableCell align="center">{item.email}</TableCell>
                <TableCell align="center">{item.department.name} </TableCell>
                <TableCell align="center">{item.location.name} </TableCell>
                <TableCell align="center">{item.seniorityLevel.name} </TableCell>
                <TableCell align="center">{item.employeeId} </TableCell>
            </TableRow>
        ))}
        
        </TableBody>
      </Table>
    </TableContainer>
          {/* {details.data && <div>
         <h4>Name: {details.data.listEmployeeUnderAgency.data.fullName} </h4>  
         <h4>Phone: {details.data.listEmployeeUnderAgency.phone}</h4>  <hr></hr>
         <h4>Email: {details.data.listEmployeeUnderAgency.email}</h4>  <hr></hr>
         <h4>Department: {details.data.listEmployeeUnderAgency.department.name}</h4>   <hr></hr>
         <h4>Location: {details.data.listEmployeeUnderAgency.location.name}</h4>   <hr></hr>
         <h4>Seniority Level: {details.data.listEmployeeUnderAgency.seniorityLevel.name}</h4>   <hr></hr>
        <h4>Employee ID: {details.data.listEmployeeUnderAgency.employeeId}</h4>   <hr></hr>
         </div>} */}
          
      </div>
      
  );

}

export default withRouter(EmployeePage)
