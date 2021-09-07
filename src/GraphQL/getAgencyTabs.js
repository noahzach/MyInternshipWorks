import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withRouter } from "react-router";
import { gql, useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DetailPage from './detailPage';
import EmployeePage from './employeePage';
import SurveyPage from './surveyPage';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

 function GetAgencyTabs(props) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };


  return (
      <div>
          <h2>Agency Details</h2>
          <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Overview " {...a11yProps(0)} />
          <Tab label="Employees " {...a11yProps(1)} />
          <Tab label="Surveys " {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <DetailPage/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EmployeePage/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SurveyPage/>
      </TabPanel>
          
      </div>
      
  );

}

export default withRouter(GetAgencyTabs); 