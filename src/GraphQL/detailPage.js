import React,{useState} from 'react';
import { withRouter } from "react-router";
import Avatar from '@material-ui/core/Avatar';
import { gql, useQuery } from '@apollo/client';
// import './app.css';


const GET_AGENCY = gql`
  query getAgency($agencyId: String!){
    getAgency(agencyId:$agencyId){
            _id
            agencyName
            logo
            address
            website
            phone
            email
            surveyCount
            employeeCount
            status
            createdDate
            contactPerson{
                firstName
                lastName
                email
                phone
                profileImage
            }
        
    }
  }
`;

 function DetailPage(props) {
    let x = (props.match.params.id)
    let z = x.substring(1);
    console.log(z)
    const details =  useQuery(GET_AGENCY,{
        variables:{
            agencyId: z
            
        }
    });

console.log('details -->', details)




// const body = (
//     <div>
          
//           <Avatar src = {details.data.getAgency.logo}/> <br></br>
//          {/* {props._id} <br></br> */}
//          <h4>Name: {props.agencyName} </h4>  <hr></hr>
//          <h4>Address: {props.address}</h4>   <hr></hr>
//          <h4>Phone: {props.phone}</h4>  <hr></hr>
//          <h4>Email: {props.email}</h4>  <hr></hr>
//          <h4>Website: {props.website}</h4>   <hr></hr>
         
         
//          {props.surveyCount}<br></br>
//          {props.employeeCount}<br></br>
//          {props.status}<br></br>
//          {props.createdDate}
//          <h4>Primary Contact</h4>
//          {/* {props.contactPerson.firstName} {props.contactPerson.lastName}<br></br> */}
//          {/* {props.contactPerson.email}<br></br>
//          {props.contactPerson.phone}<br></br> */}
//          {/* <Avatar src = {props.contactPerson.profileImage}/> */}
//          {/* djskalfjklasj */}
         
//     </div>
//   );


  return (
      <div>
          {details.data && <div>
              <div>
          <Avatar src = {details.data.getAgency.logo}/> <br></br>
         {/* {props._id} <br></br> */}
         <h4>Name: {details.data.getAgency.agencyName} </h4>  <hr></hr>
         <h4>Address: {details.data.getAgency.address}</h4>   <hr></hr>
         <h4>Phone: {details.data.getAgency.phone}</h4>  <hr></hr>
         <h4>Email: {details.data.getAgency.email}</h4>  <hr></hr>
         <h4>Website: {details.data.getAgency.website}</h4>   <hr></hr>
         </div>
         <div>
         <h4>Primary Contact</h4>
          {details.data.getAgency.contactPerson.firstName} {details.data.getAgency.contactPerson.lastName}<br></br>
          {details.data.getAgency.contactPerson.email}<br></br>
          {details.data.getAgency.contactPerson.phone}<br></br>
          <Avatar src = {details.data.getAgency.contactPerson.profileImage}/>
          </div>
         </div>}
          
      </div>
      
  );

}

export default withRouter(DetailPage)
