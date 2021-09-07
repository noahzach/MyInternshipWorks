import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import SimpleModal from './modal' 


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    table: {
            minWidth: 650,
          },
  }));



function DataTable() {

    const[listData, setListData] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(apiData, [])

    function apiData() {
        axios.get('https://reqres.in/api/users?page=2').then((res) => {
            console.log('res ---->' , res.data.data)
            setListData(res.data.data)
        }).catch((err) => {
            console.log('err----->' , err)
        })
    }

    


  const classes = useStyles();

  return (
    <div className="App">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        {listData.map((item) => (
            <TableRow>
                <TableCell  width= '24px' height= '24px' margin-left= '5px' margin-right= '-6px'> <Avatar src = {item.avatar}/> </TableCell>
                <TableCell align="center">{item.first_name}</TableCell>
                <TableCell align="center">{item.last_name}</TableCell>
                <TableCell align="center">{item.email} </TableCell>
                    <TableCell>
                    <SimpleModal data = {item}/>
                    </TableCell>
            </TableRow>
        ))}
        
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
  
  
}

export default DataTable;