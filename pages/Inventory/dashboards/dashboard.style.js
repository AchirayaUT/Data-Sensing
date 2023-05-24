import { createTheme } from "@mui/material";

const styles = createTheme({
    backToReports: {
        margin: '20px 0px 0px 15px',
        fontWeight: 'bold',
        color: '#757575',
        cursor: 'pointer',
        fontSize: '14px',
        '&:hover': {
            color: '#5D40D2'
          }
    }

})

export default styles