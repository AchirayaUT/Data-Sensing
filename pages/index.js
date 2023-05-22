import React, { useEffect, useState } from "react";
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { deepPurple } from "@mui/material/colors";
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';



const inter = Inter({ subsets: ['latin'] })



const Home = () => {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Data Sensing Systesm</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href='/asset/Icon_Main.png' />
      </Head>

      
        <Grid container spacing={1} direction="row" alignItems="center">
          <Grid item xs={6} md={4} textAlign='center' >
            <img src={"/asset/AIF_Purple_noncrop.png"} style={{ width: 150, height: 150 }} />
            <Box style={{ fontSize: '32px', fontWeight: 'bolder', color: '#5D40D2', margin: 10 }}> Data Sensing System </Box>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1.5, width: "30ch" }
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  label="Username"
                  id="outlined-size-small"
                  size="small"
                  color="secondary"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle sx={{ color: deepPurple['A400'] }} />
                      </InputAdornment>
                    )
                  }}
                />
              </div>
              <div>
                <TextField
                  label="Password"
                  type="password"
                  id="outlined-size-small"
                  size="small"
                  color="secondary"
                  autoComplete="current-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: deepPurple['A400'] }} />
                      </InputAdornment>
                    )
                  }}
                />
              </div>
            </Box>
            <Button variant="outlined" color="secondary" onClick={() => router.push('/main')}>Sign in</Button>
            <Box style={{ fontSize: '16px', color: '#5D40D2' , marginTop: 30 , marginRight: 100 }}> Forgot your password? </Box>
          </Grid>

          <Grid item xs={6} md={8}>
            <img src={"/asset/bg_login.jpg"} style={{ width: '100%', height: '733px' }} />
          </Grid>
        </Grid>
      
    </>
  )
}
export default Home
