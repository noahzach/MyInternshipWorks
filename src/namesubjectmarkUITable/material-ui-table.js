import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateDrawer from './drawer';

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



function MaterialUITable() {
    const data = [
        {
            "Name": "Subin",
            "Subject": "Math", 
            "Mark": 10
        }, 
        {
            "Name": "Noah",
            "Subject": "English", 
            "Mark": 20
        }, 
        {
            "Name": "Sam",
            "Subject": "History", 
            "Mark": 30
        }, 
        {
            "Name": "Jack",
            "Subject": "Science", 
            "Mark": 40
        } 
    ]

    const[listData, setListData] = useState([])
    const [open, setOpen] = useState(false)
    const returnName = (testValue) => {
        console.log(testValue)
  }

    const setData = value => {
        console.log("VALUE----->" , value)
        let x = [...listData]
        // console.log("x----->" , x)
        x.push( value )
        setListData(x)
    }


  const classes = useStyles();

  return (
    <div className="App">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Subject</TableCell>
            <TableCell align="center">Marks</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((item) => (
            <TableRow key={item.Name}>
              <TableCell component="th" scope="row" align="center">
                {item.Name}
              </TableCell>
              <TableCell align="center">{item.Subject}</TableCell>
              <TableCell align="center">{item.Mark}</TableCell>
            </TableRow>
          ))}
          </TableBody>

          <TableBody>
          {listData.map((props) => (
            <TableRow>
                <TableCell align="center">{props.name}</TableCell>
                <TableCell align="center">{props.subject}</TableCell>
                <TableCell align="center">{props.mark}</TableCell>
            </TableRow>
           ))} 
        </TableBody>
      </Table>
    </TableContainer>
     {/* <CreateDrawer name= {"Subin"} age={23} anyData= {any} test = {returnName} open ={open} toggleDrawer = {setOpen}/> */}
     <CreateDrawer test = {returnName} open ={open} toggleDrawer = {setOpen} setData = {setData}/>
         <button onClick = {() => {
           setOpen(true)
         }} >
           Add Student
         </button>
    </div>
  );
  
  
}

export default MaterialUITable;
