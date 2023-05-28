import { createTheme } from "@mui/material";

const styles = createTheme({
    AccordionStyle: {
        border: '1px solid #e0e0e0',
        borderRight: '0px',
        borderLeft: '0px',
        margin: '0px !important',
        boxShadow: 'none',
        borderWidth: "1px 0 0 0" 
    },
    backToReports: {
        margin: '20px 0px 0px 15px',
        fontWeight: 'bold',
        color: '#757575',
        cursor: 'pointer',
        fontSize: '14px',
        '&:hover': {
            color: '#5D40D2'
          }
    },
    checkBox: {
        display: 'flex',
        justifyContent:"flex-start",
        alignItems:'center',
        width:"100%",
        padding:"0 10px"
    },
    applyD: {
        backgroundColor: "#5D40D2",
        color: '#ffffff',
        boxShadow: 'none',
        border: '1px solid #5D40D2',
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: "#5D40D2"
        }
    },
    resetD: {
        backgroundColor: "#FFFFFF",
        color: '#6D6D6D',
        marginLeft: '15px',
        boxShadow: 'none',
        border: '1px solid #DBDBDB',
        '&:hover': {
        boxShadow: 'none',
        backgroundColor: "#FFFFFF"
        }
    }
})

export default styles