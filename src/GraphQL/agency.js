import React,{useState} from 'react';
import { gql, useQuery } from '@apollo/client';

const LIST_AGENCY = gql`
  query listAgency($skip: Int!, $limit:Int!){
    listAgency(skip:$skip,limit:$limit){
        count
        data{
            agencyName
            logo
            address
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

export default function ListAgency(){

    const details =  useQuery(LIST_AGENCY,{
        variables:{
            skip:0,
            limit:10
        }
    });
    console.log('details-->',details)
    return(
        <div classname = "App">
            <h1>List  of Agencies</h1>
            
                
                {details.data && details.data.listAgency.data.map((item) =>{
                    return(
                        <div>
                    <h4>{item.agencyName}</h4>
                    <h4>{item.contactPerson.firstName}</h4>
                    <h4>{item.contactPerson.email}</h4>
                    
                    </div>
                    )
                })}
                
            
        </div>
    )
}


// table{
// logo
// agecnyname
// Email
// survey count
// eye icon thing
// modal: all of the same details
// }