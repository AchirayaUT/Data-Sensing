import { useRouter } from 'next/router';
import Image from 'next/image';
import {Box ,Grid,Button, Divider,Typography } from '@mui/material'
import styles from '@/styles/main';
import Navbar from '@/src/components/navbar';
import logo from '../../public/main/svoa.png'
import inventory from '../../public/main/inventory.png'
import demand from '../../public/main/demand.png'
import check from '../../public/main/check.png'
import stock from '../../public/main/replenishment.png'
import product from '../../public/main/product.png'
import { ThemeProvider } from '@mui/material';

const main = () => {
  const router = useRouter();
  return (
    <Navbar
      isHomePage={true}
    >
      <ThemeProvider theme={styles}>
      <Box sx={styles.main}>
        <Grid container style={{height: '100vh'}}>
          <Grid item sx={styles.gridMainLeft}>
            <Grid container>
              <Grid item sx={styles.gridMainLeftTop}>
                <Box sx={styles.gridMainLeftTopBox}>
                  <Box>
                    <Box sx={styles.gridMainLeftTopTextMain}>
                      {`Planning & Replenishment`}
                    </Box>
                    <Box sx={styles.gridMainLeftTopTextEnd}>
                      <Image className={styles.logoSvoa} src={logo} alt='logo' />
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item sx={styles.gridMainLeftBottom}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="50%"
                  width="100%"
                >
                  <Button
                    sx={styles.buttonClick}
                    onClick={() => router.push('/Inventory/dashboards')}
                  >
                    <Image
                      alt='Inventory'
                      src={inventory} 
                      style={{
                        width: '64px', 
                        height: '64px', 
                      }} />
                    <span style={{ marginLeft: '10px' }}>Inventory Forecasting</span>
                  </Button>
                  <Button
                    sx={styles.buttonClick}
                  >
                    <Image
                      alt='Demand'
                      src={demand} 
                      style={{
                        width: '64px', 
                        height: '64px', 
                      }} />
                    <span style={{ marginLeft: '10px' }}>Demand Forecasting</span>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item  sx={styles.gridMainRight}>
            <Box sx={styles.gridMainRightBox}>
              <Grid container>
                  <Grid item sx={styles.gridMainRightBoxUnder}>
                    <Box sx={styles.mainRightBoxUnderLeft}>
                      <Image alt='check'src={check}style={{ width: '200px',height: '200px'}}/>
                    </Box>
                  </Grid>
                  <Grid item container sx={styles.gridMainRightBoxUnder}>
                    <Box sx={styles.mainRightBoxUnderRight}>
                      <Typography variant="h2" sx={styles.titleDesc}> Check Stock On-Hands </Typography>
                    </Box>
                  </Grid>
              </Grid>
            </Box>
            <Divider sx={styles.dividerStyle}/>
            <Box sx={styles.gridMainRightBox}>
              <Grid container>
                  <Grid item sx={styles.gridMainRightBoxUnder}>
                    <Box sx={styles.mainRightBoxUnderLeft}>
                      <Image alt='stock'src={stock}style={{ width: '200px',height: '200px'}}/>
                    </Box>
                  </Grid>
                  <Grid item container sx={styles.gridMainRightBoxUnder}>
                    <Box sx={styles.mainRightBoxUnderRight}>
                      <Typography variant="h2" sx={styles.titleDesc}> Replenishment Stock </Typography>
                    </Box>
                  </Grid>
              </Grid>
            </Box>
            <Divider sx={styles.dividerStyle}/>
            <Box sx={styles.gridMainRightBox}>
              <Grid container>
                  <Grid item sx={styles.gridMainRightBoxUnder}>
                    <Box sx={styles.mainRightBoxUnderLeft}>
                      <Image alt='product'src={product}style={{ width: '200px',height: '200px'}}/>
                    </Box>
                  </Grid>
                  <Grid item container sx={styles.gridMainRightBoxUnder}>
                    <Box sx={styles.mainRightBoxUnderRight}>
                      <Typography variant="h2" sx={styles.titleDesc}> Product To Sell To Customers </Typography>
                    </Box>
                  </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      </ThemeProvider>
    </Navbar>

    // <ThemeProvider theme={styles}>
    //   <div className="relative max-w-xl h-80">
    //     <div className="absolute inset-0">
    //       <Image src={bg} fill />
    //       <Grid container spacing={2}>
    //         <Grid item xs={6} md={8}  style={{ marginTop: 500 }}>
    //           <Stack spacing={2} direction="row" style={{ marginLeft: 70 }}>
    //             <Button variant="outlined" style={{ fontSize: '16px', fontWeight: 'bolder', width: 320, height: 90, color: '#FFFFFF', borderRadius: 60 }} onClick={() => router.push('/Inventory')}>Inventory Forecasting</Button>
    //             <Button variant="outlined" style={{ fontSize: '16px', fontWeight: 'bolder', width: 320, height: 90, color: '#FFFFFF', borderRadius: 60 }} onClick={() => router.push('/')}>Demand Forecasting</Button>
    //           </Stack>
              
    //         </Grid>
    //       </Grid>
    //     </div>
    //   </div>
    //   </ThemeProvider>
  )
}

export default main