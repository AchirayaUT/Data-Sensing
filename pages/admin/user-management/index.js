import React, { useState } from "react";
import Navbar from "@/src/components/navbarManage";
import { Box, Button, Typography } from '@mui/material';
import { ArrowBackIos, ArrowDropDown } from "@mui/icons-material";
import { ThemeProvider } from '@mui/material';
import { useRouter } from "next/router";
import { LayoutFilter } from '@/src/components/Components';
import styles from './userMange.style';


const UserManagement = () => {
    const router = useRouter()
    const [drawerOpen, setDrawerOpen] = useState(true)

    const setDrawer = (open) => {
        setDrawerOpen(open)
    }

    const backToHome = () => {
        router.push('/main')
    }

    return (
        <Navbar 
            defaultDrawer={true}
            setDrawer={setDrawer}
            title="Management"
            // tabChildren={<LayoutFilter />}
        >
            <ThemeProvider theme={styles}>
                <Box sx={{ display: "flex", justifyContent: "right", alignItems: "center", width: "100%", marginBottom: "15px" }}>
                   
                </Box>
            </ThemeProvider>
        </Navbar>
    )
}

export default UserManagement