import { useState, useRef, useEffect } from "react";
import { Typography, TextField, Box, Accordion, AccordionSummary, Divider, AccordionDetails, Tooltip, IconButton, ThemeProvider, Checkbox, Button } from '@mui/material'
import Moment from "moment";
import { useRouter } from "next/router";
import styles from "./menuBar.style";
import { ArrowBackIos, ArrowDropDown, ClearAll, ExpandMore, SelectAll } from "@mui/icons-material";
import { DateRangePicker } from "react-date-range";

const MenuBar = ({ filterList }) => {
  const router = useRouter()
  const [expended, setExpended] = useState('0')
  const squareBoxRef = useRef(null)
  const [displayCondition, setDisplayCondition] = useState(false)
  const [brandList, setBrandList] = useState([])
  const [searchFilter, setSearchFilter] = useState({
    brandValue: '',
  })

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  useEffect(() => {
    setBrandList(filterList)
  }, [filterList])

  const backToHome = () => {
    router.push('/main')
  }

  const backToUserManagement = () => {
    console.log('teat ')
    router.push('/admin/user-management')
    
  }
  const backToRoleManagement = () => {
    router.push('/admin/role-management')
  }
  const backToAgingManagement = () => {
    router.push('/admin/aging-management')
  }


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
        {`Back To Home Page`}
        </Box>
      </Box>
      <Divider sx={{ marginTop: '10px', width: '100%' }} />

      <Box sx={styles.backToReports}
        display="flex"
        justifyContent="left"
        alignItems="center"
        onClick={backToUserManagement}
      >
        <Box>
        {`User Management`}
        </Box>
      </Box>


      <Box sx={styles.backToReports}
        display="flex"
        justifyContent="left"
        alignItems="center"
        onClick={backToRoleManagement}
      >
        <Box>
        {`Role Management`}
        </Box>
      </Box>
  

      <Box sx={styles.backToReports}
        display="flex"
        justifyContent="left"
        alignItems="center"
        onClick={backToAgingManagement}
      >
        <Box>
        {`Aging Management`}
        </Box>
      </Box>

    </>
  )
}

export default MenuBar