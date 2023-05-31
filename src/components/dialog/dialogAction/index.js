import { useState, useRef, useEffect } from "react";
import { Typography, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, Button, Dialog } from '@mui/material'
import { useRouter } from "next/router";
import { useTheme } from '@mui/material/styles';
import { deepPurple } from "@mui/material/colors";
import DeleteIcon from '@mui/icons-material/Delete';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {  DialogCreate } from '@/src/components/Components'


const DialogAction = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <div>
        <Button style={{ backgroundColor: '#5D40D2', color: '#FFFFFF', marginRight: 10 }} startIcon={<AddCircleOutlineIcon />}>
          {`New Create`}
        </Button>
        <Button variant="outlined" sx={{ color: deepPurple['A400'] }} onClick={handleClickOpen} startIcon={<DeleteIcon />}>
          {`Deactivate / Activate`}
        </Button>



        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {'You are deactivating / activating user.'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {'Selected user(s) will not be able to sign in when deactivating user. Will you confirm?'}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              {'Confirm'}
            </Button>
            <Button onClick={handleClose} autoFocus>
              {'Cancel'}
            </Button>
          </DialogActions>
        </Dialog>
      </div>

    </>
  )
}

export default DialogAction