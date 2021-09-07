import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ListAgencyModal from './listAgencyModal';
import DetailPage from  './detailPage';
import { gql, useQuery } from '@apollo/client';


const LIST_AGENCY = gql`
  query listAgency($skip: Int!, $limit:Int!){
    listAgency(skip:$skip,limit:$limit){
        count
        data{
            agencyName
            logo
            address
            _id
            surveyCount
            phone
            email
            employeeCount
            status
            createdDate
            website
            contactPerson{
                firstName
                lastName
                email
                phone
                profileImage
            }
        }
    }
  }
`;

  export default function ListAgencyTable() {
    const details =  useQuery(LIST_AGENCY,{
        variables:{
            skip:0,
            limit:10
        }
    });

  return (
    <div className="App">
        <h1>Agency Table</h1>
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center"> Agency </TableCell>
            <TableCell align="center"> Email </TableCell>
            <TableCell align="center">Survey Count</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        {details.data && details.data.listAgency.data.map((item) => (
            <TableRow>
                <TableCell  width= '24px' height= '24px' margin-left= '5px' margin-right= '-6px'> <Avatar src = {item.logo}/> </TableCell>
                <TableCell align="center">{item.agencyName}</TableCell>
                <TableCell align="center">{item.email}</TableCell>
                <TableCell align="center">{item.surveyCount} </TableCell>
                    <TableCell>
                    {/* <ListAgencyModal data = {item}/> */}
                    {/* <a href={`/details/:${item._id}`}>Show Details</a> */}
                    <a href={"/getAgencyTabs/:" + item._id} data = {item}>Show Details</a>
                    </TableCell>
            </TableRow>
        ))}
        
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
  
  
}

