import { useRouter } from 'next/router';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import bg from '../../src/asset/bg_main.jpg';
import { blueGrey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[50],
    }
  }
});


const main = () => {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <div className="relative max-w-xl h-80">
        <div className="absolute inset-0">
          <Image src={bg} fill />
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}  style={{ marginTop: 500 }}>
              <Stack spacing={2} direction="row" style={{ marginLeft: 70 }}>
                <Button variant="outlined" style={{ fontSize: '16px', fontWeight: 'bolder', width: 320, height: 90, color: '#FFFFFF', borderRadius: 60 }} onClick={() => router.push('/Inventory')}>Inventory Forecasting</Button>
                <Button variant="outlined" style={{ fontSize: '16px', fontWeight: 'bolder', width: 320, height: 90, color: '#FFFFFF', borderRadius: 60 }} onClick={() => router.push('/')}>Demand Forecasting</Button>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </div>
      </ThemeProvider>
  )
}

export default main