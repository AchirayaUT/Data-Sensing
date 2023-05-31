import { useState, useRef, useEffect } from "react";
import { Typography, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, Button, Dialog } from '@mui/material'
import { useRouter } from "next/router";
import { useTheme } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { deepPurple } from "@mui/material/colors";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const DialogCreate = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
       <div>
       {/* <Button style={{ backgroundColor: '#5D40D2', color: '#FFFFFF', marginRight: 10 }} startIcon={<AddCircleOutlineIcon />}>
          {`Create User`}
        </Button> */}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            variant="standard"
            color="secondary"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="User Name"
            fullWidth
            variant="standard"
            color="secondary"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            fullWidth
            variant="standard"
            color="secondary"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Role"
            fullWidth
            variant="standard"
            color="secondary"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{'Create'}</Button>
          <Button onClick={handleClose}>{'Cancel'}</Button>
        </DialogActions>
      </Dialog>
    </div>
    </>
  )
}

export default DialogCreate