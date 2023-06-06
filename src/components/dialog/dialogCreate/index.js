import { useState, useRef, useEffect } from "react";
import { deepPurple } from "@mui/material/colors";
import { Box, Checkbox, Button, Dialog, DialogContent, DialogActions, DialogTitle, FormControlLabel, FormControl, FormHelperText, OutlinedInput, FormLabel, FormGroup } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const DialogCreate = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({ gilad: false });

  const { gilad } = state;

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Button variant="outlined" onClick={handleClickOpen} style={{ backgroundColor: '#5D40D2', color: '#FFFFFF', marginRight: 10 }} startIcon={<AddCircleOutlineIcon />}>
          {`Create`}
        </Button>
        <Dialog open={open} onClose={handleClose}>

          <DialogContent>
            <DialogTitle style={{ fontSize: 16, color: '#646464' }}>{`Create User`}</DialogTitle>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', display: "flex", justifyContent: 'center', alignItems: "center", width: "100%" }}>
              <div>
                <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                  <FormHelperText id="outlined-weight-helper-text">{`Name`}</FormHelperText>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    size="small"
                    inputProps={{
                      'aria-label': 'Name',
                      maxLength: 500,
                    }}
                  />
                </FormControl>
              </div>

              <div>
                <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                  <FormHelperText id="outlined-weight-helper-text">{`UserName`}</FormHelperText>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    size="small"
                    inputProps={{
                      'aria-label': 'UserName',
                      maxLength: 500,
                    }}
                  />
                </FormControl>
              </div>

              <div>
                <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                  <FormHelperText id="outlined-weight-helper-text">{`Email`}</FormHelperText>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    size="small"
                    inputProps={{
                      'aria-label': 'Email',
                      maxLength: 500,
                    }}
                  />
                </FormControl>
              </div>

              <div>
                <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                  <FormHelperText id="outlined-weight-helper-text">{`Role`}</FormHelperText>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    size="small"
                    inputProps={{
                      'aria-label': 'Role',
                      maxLength: 500,
                    }}
                  />
                </FormControl>
              </div>

              <FormControl sx={{ m: 1 }} variant="standard">
                <FormLabel component="legend" style={{ fontSize: 12, color: '#646464' }}>Password </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox checked={gilad} onChange={handleChange} 
                      name="gilad" 
                      sx={{
                        color: deepPurple['A400'],
                        '&.Mui-checked': {
                          color: deepPurple['A400'],
                        },
                      }} />
                    }
                    label="Check to auto genarate password"
                  />
                </FormGroup>
              </FormControl>

              <div>
                <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                  <FormHelperText id="outlined-weight-helper-text">{`Password`}</FormHelperText>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    size="small"
                    inputProps={{
                      'aria-label': 'Password',
                      maxLength: 500,
                    }}
                  />
                </FormControl>
              </div>

              <div>
                <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                  <FormHelperText id="outlined-weight-helper-text">{`Password Confirmation`}</FormHelperText>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    size="small"
                    inputProps={{
                      'aria-label': 'PasswordConfirmation *',
                      maxLength: 500,
                    }}
                  />
                </FormControl>
              </div>

            </Box>
          </DialogContent>

          <DialogActions>
            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: "center", width: "100%", marginBottom: 2 }}>
              <Button style={{ backgroundColor: '#5D40D2', color: '#FFFFFF', marginRight: 10 }} onClick={handleClose}>{`Create`}</Button>
              <Button variant="outlined" style={{ backgroundColor: '#FAFBFE', color: '#646464', marginRight: 10 }} onClick={handleClose}>{`Back`}</Button>
            </Box>
          </DialogActions>
        </Dialog>
      </div>

    </>
  )
}

export default DialogCreate