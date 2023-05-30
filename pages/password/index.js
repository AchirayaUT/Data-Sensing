import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import TextField from '@mui/material/TextField';
import LockIcon from "@mui/icons-material/Lock";
import { deepPurple } from "@mui/material/colors";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box, Grid, Button, Link, InputAdornment } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import styles from './password.style';



const NewPassword = () => {
  const router = useRouter();

  return (
    <>

      <Grid container style={{ backgroundColor: '#624EAA', width: '100%', height: '97.5vh' }}>
        <Paper
          sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 510,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Grid container spacing={1} direction="column" alignItems="center">
            <Grid item xs={6} md={4} textAlign='center' >
              <img src={"/asset/AIF_Purple_noncrop.png"} style={{ width: 90, height: 90 }} />
              <Box style={{ fontSize: '22px', fontWeight: 'bolder', color: '#5D40D2' }}> {`Data Sensing System`}  </Box>
              <Box style={{ fontSize: '20px', fontWeight: 'bolder', color: '#5D40D2', margin: 10 }}> {`Reset Password`}  </Box>

              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1.5, width: "30ch" }
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  label={`Email`}
                  id="outlined-size-small"
                  size="small"
                  color="secondary"
                  inputProps={{
                    maxLength: 255,
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle sx={{ color: deepPurple['A400'] }} />
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  label={`New Password`}
                  type="password"
                  id="outlined-size-small"
                  size="small"
                  color="secondary"
                  autoComplete="current-password"
                  required
                  inputProps={{
                    maxLength: 255,
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: deepPurple['A400'] }} />
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  label={`Confirm Password`}
                  type="password"
                  id="outlined-size-small"
                  size="small"
                  color="secondary"
                  autoComplete="current-password"
                  required
                  inputProps={{
                    maxLength: 255,
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: deepPurple['A400'] }} />
                      </InputAdornment>
                    )
                  }}
                />
              </Box>

              <Box style={{ margin: 10 }}>
                <Button style={{ width: 150, height: 30, backgroundColor: '#5D40D2', color: '#FFFFFF' }}> {`Reset`} </Button>
              </Box>
              {/* style={{width: 50, height: 10}} */}
              <Box style={{ fontSize: '16px', fontWeight: 'bolder', }}>
                <Link
                  data-cy="login"
                  onClick={() => router.push('/')}
                  color={'#5D40D2'}
                >
                  {`Login`}
                </Link>
              </Box>

              <Grid item>
                <Typography variant="subtitle1" component="div" style={{ fontSize: '12px', fontWeight: 'bolder', textAlign: 'left', padding: 20, color: '#6D6D6D' }}>
                  <li>{`ต้องมีตัวอักษรภาษาอังกฤษ อักษรพิเศษ และตัวเลข รวมกันอย่างน้อย 8 ตัว`}</li>
                  <li>{`ต้องมีตัวอักษรภาษาอังกฤษในรหัสผ่านอย่างน้อย 1 ตัว`}</li>
                  <li>{`ต้องมีอักษรพิเศษอย่างน้อย 1 ตัว เช่น * # @ % - +`}</li>
                  <li>{`ต้องมีตัวเลขอย่างน้อย 1 ตัว`}</li>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

    </>
  )
}
export default NewPassword