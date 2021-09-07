import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles ((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    list: {
        width: 550,
      },
      fullList: {
        width: 'auto',
      },
  }));

function CreateDrawer(props) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [mark, setMark] = useState("");
  // console.log(props)

  return (
    <div className = "position">
         
        <React.Fragment>
          
          
          <Drawer open={props.open} anchor = 'right'>
            
          <TextField
          required
          id="filled-required"
          label="First Name"
          InputLabelProps={{                
            shrink: true,
          }}
          value = {name}
          onChange={(e) => {
          setName(e.target.value)
          }}
          variant="filled"
        />
        <br></br>
        
        <TextField
          required
          id="filled-required"
          label="Subject"           
          InputLabelProps={{                
            shrink: true,
          }}
          value = {subject}
          onChange={(e) => {
            setSubject(e.target.value)
            }}
          variant="filled"
        />
        <br></br>
        
        <TextField
          required
          id="filled-number"
          label="Mark"
          type="number"
          InputLabelProps={{                
            shrink: true,
          }}
          value = {mark}
          onChange={(e) => {
            setMark(e.target.value)
            }}
          variant="filled"
        />

        <button onClick = {() => {
           props.toggleDrawer(false)
           props.setData({
             name: name,
             subject: subject,
             mark: mark
           })
         }}>
              Submit
            </button>
          </Drawer>
        </React.Fragment>
    </div>
  );
}

export default CreateDrawer;