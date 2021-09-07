import './app.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




function Table1() {
    // let responseArr = [];
// data.forEach((item, index, array) => {
//     responseArr.push(
//         <tr>
//             <td>{item.Name}</td>
//             <td>{item.Subject}</td>
//             <td>{item.Mark}</td>
//         </tr>
//     )
// })


let data = [
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

let responseArr2 = [];
responseArr2 = data.map((item, index, array) => {
    return(
        <tr>
            <td>{item.Name}</td>
            <td>{item.Subject}</td>
            <td>{item.Mark}</td>
        </tr>        
    )
})

return (
<div className = "App">
    <br></br>
    <table>
        <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Mark</th>
        </tr>
     {responseArr2}
    </table>
</div>
);
}

export default Table1;
