import React, { useEffect, useState } from "react";
import { Hidden } from '@mui/material';
import { useRouter } from 'next/router';
import TextField from '@mui/material/TextField';
import LockIcon from "@mui/icons-material/Lock";
import { deepPurple } from "@mui/material/colors";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box, Grid, Button, Link, InputAdornment } from '@mui/material'


const SingIn = () => {
  const router = useRouter();

  return (
    <>
      {/* <Head>
        <title>Data Sensing Systesm</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href='/asset/Icon_Main.png' />
      </Head> */}

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
            <TextField
              label="Username"
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
              label="Password"
              type="password"
              id="outlined-size-small"
              size="small"
              color="secondary"
              autoComplete="current-password"
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
          <Box>
            <Button type="submit" variant="outlined" color="secondary" onClick={() => router.push('/main')}> {`Sign In`} </Button>
          </Box>

          <Box style={{ fontSize: '16px', color: '#5D40D2', marginTop: 30, marginRight: 100 }}>

            <Link
              href="#"
              data-cy="forgot_password"
            // onClick={toForgotPassword}
            >
              {`Forgot your password?`}
            </Link>
          </Box>
        </Grid>

        <Hidden mdDown>
          <Grid item xs={4} lg={8}>
            <img src={"/asset/bg_login.jpg"} style={{ width: '100%', height: '97vh' }} />
          </Grid>
        </Hidden>

      </Grid>


    </>
  )
}
export default SingIn


