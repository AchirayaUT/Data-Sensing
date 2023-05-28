import { useState, useRef, useEffect}from "react";
import { Typography, TextField, Box,Accordion, AccordionSummary, Divider , AccordionDetails, Tooltip, IconButton, ThemeProvider, Checkbox, Button } from '@mui/material'
import Moment from "moment";
import { useRouter } from "next/router";
import styles from "./layoutFilter.style";
import { ArrowBackIos, ArrowDropDown, ClearAll, ExpandMore, SelectAll } from "@mui/icons-material";
import { DateRangePicker } from "react-date-range";

const LayoutFilter = ({filterList}) => {
    const router = useRouter()
    const [expended, setExpended] = useState('0')
    const squareBoxRef = useRef(null)
    const [displayCondition, setDisplayCondition] = useState(false)
    const [brandList, setBrandList] = useState([])
    const [searchFilter, setSearchFilter] = useState({
        brandValue: '',
    })

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    // const [dateRangeStr, setDateRangeStr] = useState(Moment(new Date(startDate)).format('MMM D, YYYY') + ' to ' + Moment(new Date(endDate)).format('MMM D, YYYY'))
    // const [displayCondition, setDisplayCondition] = useState(false)

    useEffect(() => {
        setBrandList(filterList)
    },[filterList])

    const clickOutsidehandler = () => {
        console.log('test click');
    }

    const backToHome = () => {
        router.push('/main')
    }

    console.log(brandList);
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
                {/* <DateRangePicker
                    moveRangeOnFirstSelection={true}
                    direction="horizontal"
                    months={2}
                    preventSnapRefocus={true}
                    rangeColors={["5D40D2"]}
                    editableDateInputs={false}
                /> */}
            </div>
            <Typography sx={{margin: '20px 0 10px 15px', fontWeight: 'bold', color: '#757575'}}>
                Filter
            </Typography>
            <Box height="calc(100% - 400px)" sx={{overflowY: 'auto', overflowX: 'hidden'}}>
                <Accordion
                    // expanded={expended === 'Brand'}
                    sx={styles.AccordionStyle} 
                >
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Brand</Typography>

                    </AccordionSummary>
                    <Divider/>
                    <AccordionDetails sx={{display: 'block', padding: '10px 0' }}>
                        <Box>
                            <Box display="flex" justifyContent="center" alignItems="center" width="100%" padding="0px 10px">
                                <Box>
                                    <Tooltip title="Clear All" placement="bottom-start">
                                        <IconButton
                                            color="inherit"
                                            aria-label="clear data"
                                            edge="start"
                                        >
                                            <ClearAll sx={{ color: "#757575" }}/>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Box>
                                    <Tooltip title="Select All" placement="bottom-start">
                                        <IconButton
                                            color="inherit"
                                            aria-label="select all data"
                                            edge="start"
                                        >
                                            <SelectAll sx={{color: "#757575"}}/>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <ThemeProvider theme={styles}>
                                    <TextField
                                        label="Search"
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                        fullWidth
                                        // inputProps={{ height: '30px !important'}}
                                        value={searchFilter.brandValue}
                                        onChange={e => setSearchFilter({ ...searchFilter, brandValue: e.target.value})}
                                    />
                                </ThemeProvider>
                            </Box>
                            <Divider sx={{ marginTop: '10px', width: '100%' }} />
                            <Box padding="10px" maxHeight="250px" sx={{ overflowY: 'auto'}}>
                                {brandList.map((brand, index) => {
                                    return (
                                        <Box
                                        sx={styles.checkBox}
                                        key={`brandList-${index}`}
                                    >
                                        <Checkbox
                                            disabled
                                            color="primary"
                                            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                        />
                                        <Box width="90%">{brand.name}</Box>
                                    </Box>
                                    )
                                })}
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    // expanded={expended === 'Brand'}
                    sx={styles.AccordionStyle} 
                >
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Family</Typography>

                    </AccordionSummary>
                    <Divider/>
                    <AccordionDetails sx={{display: 'block', padding: '10px 0' }}>
                        <Box>
                            <Box display="flex" justifyContent="center" alignItems="center" width="100%" padding="0px 10px">
                                <Box>
                                    <Tooltip title="Clear All" placement="bottom-start">
                                        <IconButton
                                            color="inherit"
                                            aria-label="clear data"
                                            edge="start"
                                        >
                                            <ClearAll sx={{ color: "#757575" }}/>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Box>
                                    <Tooltip title="Select All" placement="bottom-start">
                                        <IconButton
                                            color="inherit"
                                            aria-label="select all data"
                                            edge="start"
                                        >
                                            <SelectAll sx={{color: "#757575"}}/>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <ThemeProvider theme={styles}>
                                    <TextField
                                        label="Search"
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                        fullWidth
                                        // inputProps={{ height: '30px !important'}}
                                        value={searchFilter.brandValue}
                                        onChange={e => setSearchFilter({ ...searchFilter, brandValue: e.target.value})}
                                    />
                                </ThemeProvider>
                            </Box>
                            <Divider sx={{ marginTop: '10px', width: '100%' }} />
                            <Box padding="10px" maxHeight="250px" sx={{ overflowY: 'auto'}}>
                                {brandList.map((brand, index) => {
                                    return (
                                        <Box
                                        sx={styles.checkBox}
                                        key={`brandList-${index}`}
                                    >
                                        <Checkbox
                                            disabled
                                            color="primary"
                                            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                        />
                                        <Box width="90%">{brand.name}</Box>
                                    </Box>
                                    )
                                })}
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    // expanded={expended === 'Brand'}
                    sx={styles.AccordionStyle} 
                >
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Class</Typography>

                    </AccordionSummary>
                    <Divider/>
                    <AccordionDetails sx={{display: 'block', padding: '10px 0' }}>
                        <Box>
                            <Box display="flex" justifyContent="center" alignItems="center" width="100%" padding="0px 10px">
                                <Box>
                                    <Tooltip title="Clear All" placement="bottom-start">
                                        <IconButton
                                            color="inherit"
                                            aria-label="clear data"
                                            edge="start"
                                        >
                                            <ClearAll sx={{ color: "#757575" }}/>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Box>
                                    <Tooltip title="Select All" placement="bottom-start">
                                        <IconButton
                                            color="inherit"
                                            aria-label="select all data"
                                            edge="start"
                                        >
                                            <SelectAll sx={{color: "#757575"}}/>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <ThemeProvider theme={styles}>
                                    <TextField
                                        label="Search"
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                        fullWidth
                                        // inputProps={{ height: '30px !important'}}
                                        value={searchFilter.brandValue}
                                        onChange={e => setSearchFilter({ ...searchFilter, brandValue: e.target.value})}
                                    />
                                </ThemeProvider>
                            </Box>
                            <Divider sx={{ marginTop: '10px', width: '100%' }} />
                            <Box padding="10px" maxHeight="250px" sx={{ overflowY: 'auto'}}>
                                {brandList.map((brand, index) => {
                                    return (
                                        <Box
                                        sx={styles.checkBox}
                                        key={`brandList-${index}`}
                                    >
                                        <Checkbox
                                            disabled
                                            color="primary"
                                            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                        />
                                        <Box width="90%">{brand.name}</Box>
                                    </Box>
                                    )
                                })}
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    // expanded={expended === 'Brand'}
                    sx={styles.AccordionStyle} 
                >
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>SubClass</Typography>

                    </AccordionSummary>
                    <Divider/>
                    <AccordionDetails sx={{display: 'block', padding: '10px 0' }}>
                        <Box>
                            <Box display="flex" justifyContent="center" alignItems="center" width="100%" padding="0px 10px">
                                <Box>
                                    <Tooltip title="Clear All" placement="bottom-start">
                                        <IconButton
                                            color="inherit"
                                            aria-label="clear data"
                                            edge="start"
                                        >
                                            <ClearAll sx={{ color: "#757575" }}/>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Box>
                                    <Tooltip title="Select All" placement="bottom-start">
                                        <IconButton
                                            color="inherit"
                                            aria-label="select all data"
                                            edge="start"
                                        >
                                            <SelectAll sx={{color: "#757575"}}/>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <ThemeProvider theme={styles}>
                                    <TextField
                                        label="Search"
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                        fullWidth
                                        // inputProps={{ height: '30px !important'}}
                                        value={searchFilter.brandValue}
                                        onChange={e => setSearchFilter({ ...searchFilter, brandValue: e.target.value})}
                                    />
                                </ThemeProvider>
                            </Box>
                            <Divider sx={{ marginTop: '10px', width: '100%' }} />
                            <Box padding="10px" maxHeight="250px" sx={{ overflowY: 'auto'}}>
                                {brandList.map((brand, index) => {
                                    return (
                                        <Box
                                        sx={styles.checkBox}
                                        key={`brandList-${index}`}
                                    >
                                        <Checkbox
                                            disabled
                                            color="primary"
                                            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                        />
                                        <Box width="90%">{brand.name}</Box>
                                    </Box>
                                    )
                                })}
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box
                display="flex"
                justifyContent="right"
                alignItems="right"
                width="100%"
                paddingRight="10px"
                marginTop="15px"
                marginBottom="15px"
            >
                <Button
                    variant="contained"
                    sx={styles.applyD}
                >
                    Apply
                </Button>
                <Button
                    variant="contained"
                    sx={styles.resetD}
                >
                    Reset
                </Button>

            </Box>
            
        </>
    )
}

export default LayoutFilter