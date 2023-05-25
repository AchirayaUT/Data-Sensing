import React ,{ useState, useRef}from "react";
import { Typography, TextField, Box} from '@mui/material'
import Moment from "moment";
import { useRouter } from "next/router";
import styles from "@/pages/Inventory/dashboards/dashboard.style";
import { ArrowBackIos, ArrowDropDown } from "@mui/icons-material";


const LayoutFilter = () => {
    const router = useRouter()
    const squareBoxRef = useRef(null)
    const [displayCondition, setDisplayCondition] = useState(false)
    // const [dateRangeStr, setDateRangeStr] = useState(Moment(new Date(startDate)).format('MMM D, YYYY') + ' to ' + Moment(new Date(endDate)).format('MMM D, YYYY'))
    // const [displayCondition, setDisplayCondition] = useState(false)

    const clickOutsidehandler = () => {
        console.log('test click');
    }

    const backToHome = () => {
        router.push('/main')
    }
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
            <Typography sx={{ margin: '20px 0 10px 15px', fontWeight: 'bold', color: '#757575'}}>
                Date Range Filter
            </Typography>
            <TextField
                id="outlined-helperText"
                disabled
                label="Select Date Range"
                defaultValue="Hello World"
                // value={dateRangeStr}
                onClick={clickOutsidehandler}
                sx={{ margin: '0 10px 10px 10px'}}
            />
            <div>

            </div>
        </>
    )
}

export default LayoutFilter