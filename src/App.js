import './app.css';
import React, {useState} from 'react';
import SignUp from './LoginForm/signUp'
import Table1 from './table';
import MaterialUITable from './namesubjectmarkUITable/material-ui-table';
import Test from './apiTest';
import Data from './apiData';
import DataTable from './apiData/dataTable' 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Location from './GraphQL/index'
import LoginForm from './GraphQL/loginForm';
import ListLocation from './GraphQL/listLocation';
import ListAgency from './GraphQL/agency';
import ListAgencyTable from './GraphQL/listAgencyTable';
import DetailPage from './GraphQL/detailPage'
import GetAgencyTabs from './GraphQL/getAgencyTabs'
import EmployeePage from './GraphQL/employeePage'
import SurveyPage from './GraphQL/surveyPage';



function App() {  
  return (
    <div className="App"> 
    
    <Router>
      <Switch>
         {/* <Table1/> */}
         <Route path = "/signup">
           <SignUp/>
         </Route>
         
         {/* <DataTable/> */}
         <Route path = "/materialUItable">
            <MaterialUITable/>
         </Route>
         
         {/* <Test/> */}
          
          <Route path="/datatable">
            <DataTable/> 
          </Route>
          
         {/* <SimpleModal/> */}

         {/* <Location /> */}

         <Route path="/loginform">
            <LoginForm/>   
          </Route>
          <Route path="/listlocation">
            <ListLocation/>   
          </Route>
          <Route path="/listagency">
            <ListAgency/>   
          </Route>
          <Route path="/listagencytable">
            <ListAgencyTable/>   
          </Route>
          <Route path="/detailpage/:id">
            <DetailPage/>
          </Route>
          <Route path="/employeepage/:id">
            <EmployeePage/>
          </Route>
          <Route path="/surveypage/:id">
            <SurveyPage/>
          </Route>
          <Route path="/getagencytabs/:id">
            <GetAgencyTabs/>
          </Route>

      </Switch>  
    </Router>
    </div>
  );

}
  

  



export default App;
