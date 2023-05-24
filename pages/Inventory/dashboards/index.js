import React, { useState } from "react";
import Navbar from "@/src/components/navbar";
import { Box, Button , Typography} from '@mui/material'
import { ArrowBackIos, ArrowDropDown } from "@mui/icons-material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { ThemeProvider } from '@mui/material';
import styles from "./dashboard.style";
import { useRouter } from "next/router";
import { LayoutFilter } from "@/components/Components"


const Dashboard = () => {
    const router = useRouter()
    const [drawerOpen, setDrawerOpen] = useState(true)

    const setDrawer = (open) => {
        setDrawerOpen(open)
      }

    const backToHome = () => {
        router.push('/main')
    }

    const LayoutChild = () => {
        return(
            <>
                <Box sx={styles.backToReports} 
                    display="flex"
                    justifyContent="left"
                    alignItems="center"
                    onClick={backToHome}
                >
                    <ArrowBackIos sx={{width: '24px'}}/>
                    <Box>
                        Back To Home Page
                    </Box>
                </Box>
                <Box padding="10px 15px" color="#757575" fontSize={16} fontWeight="500">
                    <Typography variant="h6" sx={{margin: 0, paddingBottom: '15px', fontSize: '11px' }}>
                        MAIN NEVIGATION
                    </Typography>
                    <LayoutFilter />
                    {/* <Box
                        display="flex"
                        justifyContent="left"
                        alignItems="center"
                        padding="7.5px 15px"
                        sx={{cursor: 'pointer'}}
                        onClick={() => {
                            router.push('/Inventory/dashborads');
                          }}
                    >
                        <DashboardIcon sx={{color: '#757575' }}/>
                        <Box sx={{marginLeft: '10px'}}>Dashboard </Box>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="left"
                        alignItems="center"
                        padding="7.5px 15px"
                        sx={{cursor: 'pointer'}}
                        onClick={() => {
                            router.push('/Inventory/dashborads');
                          }}
                    >
                        <SummarizeIcon sx={{color: '#757575' }}/>
                        <Box sx={{marginLeft: '10px'}}>Stock Forecast </Box>
                    </Box> */}
                </Box>
            </>
        )
    }

    return(
        <Navbar
            defaultDrawer={true}
            setDrawer={setDrawer}
            title="Inventory Forecasting"
            tabChildren={<LayoutFilter/>}
        >
            <ThemeProvider theme={styles}>
                <Box sx={{display:"flex", justifyContent:"right" ,alignItems:"center", width:"100%", marginBottom:"15px"}}>
                    <Button>
                        <ArrowDropDown sx={{width: '24px'}}/>
                        SELECT FIELD
                    </Button>
                </Box>
            </ThemeProvider>
        </Navbar>
    )
}

export default Dashboard