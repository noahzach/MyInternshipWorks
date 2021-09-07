import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export default function ListAgencyModal(item) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Agency Description</h2>
      
      <p id="simple-modal-description">
         <Avatar src = {item.data.logo}/>
        {item.data._id} <br></br>
        {item.data.agencyName} <br></br>
        {item.data.address}<br></br>
        {item.data.website}<br></br>
        {item.data.phone}<br></br>
        {item.data.email}<br></br>
        {item.data.surveyCount}<br></br>
        {item.data.employeeCount}<br></br>
        {item.data.status}<br></br>
        {item.data.createdDate}
        <h4>Contact Info</h4>
        {item.data.contactPerson.firstName} {item.data.contactPerson.lastName}<br></br>
        {item.data.contactPerson.email}<br></br>
        {item.data.contactPerson.phone}<br></br>
        <Avatar src = {item.data.contactPerson.profileImage}/>
        {/* {item.data.contactPerson.profileImage}<br></br> */}
      </p>
    </div>
  );
  return (
    <div>
        <Fab 
            align='center '
        onClick={handleOpen}
        >
            <VisibilityIcon />
        </Fab>
      <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
        
      </Modal>
    </div>
  );
}
