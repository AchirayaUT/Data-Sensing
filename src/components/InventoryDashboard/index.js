import { Box, Button, Grid, Paper,Typography  } from "@mui/material";
import React from "react";
import styles from "./invenDashboard.style";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';


const InvenDashboard = () => {
    return(
        <Box>
            <div>
                <Grid item container >
                    <Grid xs={12} md={6} style={{marginTop: 35}}>
                        <Box
                            display="flex"
                            justifyContent="center"
                        >
                            <Button
                                
                                sx={styles.buttonStock}
                                startIcon={<Inventory2OutlinedIcon  style={{ fontSize: 32}}/>}
                                variant="contained"
                            >
                                Stock Forecast
                            </Button>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6} style={{marginTop: 35}}>
                        <Box
                            display="flex"
                            justifyContent="center"
                        >
                            <Button
                                
                                sx={styles.buttonStock}
                                startIcon={<AnalyticsOutlinedIcon  style={{ fontSize: 32}}/>}
                                variant="contained"
                            >
                                Simulation
                            </Button>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6} style={{ marginTop: 20}}>
                        <div style={{margin: 10}}>
                            <Paper elevation={3}  style={styles.paper}>
                                <Box sx={{width: '100%'}}>
                                    <Grid container >
                                        <Grid  xs={12} md={6} sm={6} style={styles.gridData}>
                                            <Box sx={styles.box}>
                                                <Box sx={styles.boxDataTop}>
                                                    <img src="/inventory/EstimateTimeOfDeparture.png"/>
                                                    <Typography style={styles.textNum}> 128 </Typography>
                                                    <Typography style={styles.textlast}> Days </Typography>
                                                </Box>
                                                <Typography style={styles.textBottom}>Estimate time of departure</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} sm={6} style={styles.gridData}>
                                            <Box sx={styles.box}>
                                                <Box sx={styles.boxDataTop}>
                                                    <img src="/inventory/EstimateTimeOfArrival.png"/>
                                                    <Typography style={styles.textNum}> 55 </Typography>
                                                    <Typography style={styles.textlast}> Days </Typography>
                                                </Box>
                                                <Typography style={styles.textBottom}>Estimate time of arrival</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} sm={6} style={styles.gridData}>
                                            <Box sx={styles.box}>
                                                <Box sx={styles.boxDataTop}>
                                                    <img src="/inventory/TotalStock.png"/>
                                                    <Typography style={styles.textGrid}> 183 </Typography>
                                                    {/* <Typography style={styles.textlast}>  </Typography> */}
                                                </Box>
                                                <Typography style={styles.textBottom}>Physical Stock</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} sm={6} style={styles.gridData}>
                                            <Box sx={styles.box}>
                                                <Box sx={styles.boxDataTop}>
                                                    <img src="/inventory/SaleForcast.png"/>
                                                    <Typography style={styles.textGrid}> 90 </Typography>
                                                    {/* <Typography style={styles.textlast}>  </Typography> */}
                                                </Box>
                                                <Typography style={styles.textBottom}>Sale Forecast</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} sm={6} style={styles.gridData}>
                                            <Box sx={styles.box}>
                                                <Box sx={styles.boxDataTop}>
                                                    <img src="/inventory/Remain.png"/>
                                                    <Typography style={styles.textGrid}> 93 </Typography>
                                                    {/* <Typography style={styles.textlast}>  </Typography> */}
                                                </Box>
                                                <Typography style={styles.textBottom}>Remain end of month</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} sm={6} style={styles.gridData}>
                                            <Box sx={styles.box}>
                                                <Box sx={styles.boxDataTop}>
                                                    <img src="/inventory/Month.png"/>
                                                    <Typography style={styles.textGrid}> 1.03 </Typography>
                                                    {/* <Typography style={styles.textlast}>  </Typography> */}
                                                </Box>
                                                <Typography style={styles.textBottom}>Month of Sale Out</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                        </div>
                    </Grid>
                    <Grid xs={12} md={6} style={{ marginTop: 20}}>
                        <div style={{margin: 10}}>
                            <Paper elevation={3}  style={styles.paper}>
                            
                            </Paper>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Box>
    )
}

export default InvenDashboard