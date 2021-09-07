import { gql, useQuery, useLazyQuery } from '@apollo/client';
import React from 'react';

const LIST_LOCATION = gql`
    query ListLocation {
      listLocation {
        _id
        name
      }
    }
  `;

// export default function ListLocation(){
//   const { loading, error, data } = useQuery(LIST_LOCATION);

//   if (loading) return 'Loading...';
//   if (error) return `Error! ${error.message}`;

// //   return (
// //       <div>
// //       {data.listLocation.map(props => (
// //         <h2 key={props._id} value={props.name}>
// //           {props.name}
// //         </h2>
// //       ))}
// //       </div>
// //   );
// // }

const LIST_LOCATIONS = gql`
  query listLocation{
    listLocation{
        name
    }
  }
`;


export default function ListLocation(){

    const details =  useQuery(LIST_LOCATIONS);
    return(
        <div>
            <h1>List  of loactions</h1>
            <div>
                {details.data && details.data.listLocation.map((item) =>{
                    return(<h4>{item.name}</h4>)
                })}
                
            </div>
        </div>
    )
}




    // return(
    //     <div className="App">
    //         <h1>Locations</h1>
    //         <h3>Florida</h3>
    //         <h3>Texas</h3>
    //         <h3>Pennsylvania</h3>
    //         <h3>Washington</h3>
    //         <h3>New Jersey</h3>
    //         <h3>Hawaii</h3>
    //         <h3>New York</h3>
    //         <h3>San Jose</h3>
    //         <h3>India</h3>
    //     </div>
    // )
