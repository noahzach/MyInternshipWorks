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
import moment from 'moment';

const SURVEY_AGENCY = gql`
  query listSurveyUnderAgency($agencyId: String!, $skip: Int!, $limit: Int!){
    listSurveyUnderAgency(agencyId:$agencyId, skip: $skip, limit: $limit){
           
           data{ 
            _id
            name
            surveyStartDate
            surveyEndDate
            respondents
            response
            questions 
            completion
           }
            
    }
  }
`;

 function SurveyPage(props) {
    let x = (props.match.params.id)
    let z = x.substring(1);
    console.log(z)
    const details =  useQuery(SURVEY_AGENCY,{
        variables:{
            agencyId: z,
            skip: 0,
            limit: 10
            
        }
    });

console.log('details -->', details)





  return (
      <div>
          <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center"> Response </TableCell>
            <TableCell align="center">Questions</TableCell>
            <TableCell align="center"> Completion </TableCell>
            <TableCell align="center">Respondents</TableCell>
            <TableCell align="center">Survey Start Date</TableCell>
            <TableCell align="center">Survey End Date</TableCell>
            
          </TableRow>
        </TableHead>

        <TableBody>
        {details.data && details.data.listSurveyUnderAgency.data.map((item) => (
            <TableRow>
                <TableCell align="center" >{item.name}</TableCell>
                <TableCell align="center">{item.response}</TableCell>
                <TableCell align="center">{item.questions} </TableCell>
                <TableCell align="center">{item.completion}</TableCell>
                <TableCell align="center">{item.respondents} </TableCell>
                <TableCell align="center">{moment(new Date(Number(item.surveyStartDate))).format('MMMM Do, YYYY')} </TableCell>
                <TableCell align="center">{moment(new Date(Number(item.surveyEndDate))).format('MMMM Do, YYYY')} </TableCell>                
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

export default withRouter(SurveyPage)
