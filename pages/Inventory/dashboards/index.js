import React, { useState } from "react";
import Navbar from "@/src/components/navbar";
import { Box, Button, Typography } from '@mui/material';
import { ArrowBackIos, ArrowDropDown } from "@mui/icons-material";
import { ThemeProvider } from '@mui/material';
import styles from "./dashboard.style";
import { useRouter } from "next/router";
<<<<<<< Updated upstream
// import { LayoutFilter } from "@/src/components/layoutFilter";
import { LayoutFilter , InvenDashboard} from '@/src/components/Components'


const brand = [
    {name: 'B1'},
    {name: 'B1'},
    {name: 'B1'},
    {name: 'B1'},
    {name: 'B1'},
    {name: 'B1'},
    {name: 'B1'},
    {name: 'B1'},
    {name: 'B1'},
    {name: 'B1'}
]
=======
import { LayoutFilter } from '@/src/components/Components';
>>>>>>> Stashed changes


const Dashboard = () => {
    const router = useRouter()
    const [drawerOpen, setDrawerOpen] = useState(true)
    const [brandList, setBrandList] = useState(brand)

    const setDrawer = (open) => {
        setDrawerOpen(open)
    }

    const backToHome = () => {
        router.push('/main')
    }

    const LayoutChild = () => {
        return (
            <>
                <Box sx={styles.backToReports}
                    display="flex"
                    justifyContent="left"
                    alignItems="center"
                    onClick={backToHome}
                >
                    <ArrowBackIos sx={{ width: '24px' }} />
                    <Box>
                        Back To Home Page
                    </Box>
                </Box>
                <Box padding="10px 15px" color="#757575" fontSize={16} fontWeight="500">
                    <Typography variant="h6" sx={{ margin: 0, paddingBottom: '15px', fontSize: '11px' }}>
                        MAIN NEVIGATION
                    </Typography>
                    <LayoutFilter />
                </Box>
            </>
        )
    }

    return (
        <Navbar
            defaultDrawer={true}
            setDrawer={setDrawer}
            title="Inventory Forecasting"
            tabChildren={
                <LayoutFilter 
                    filterList={brandList}
                />
            }
        >
            <InvenDashboard/>
        </Navbar>
    )
}

export default Dashboard