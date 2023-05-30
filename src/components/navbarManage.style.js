import { createTheme, Theme } from "@mui/material";

const drawerWidth = 260

const styles = createTheme({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '64px',
        padding: '0px 8px'
    },
    mobileCover: {
        display: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position:'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1000,
        display: {sm: 'flex'} 
    },
    content: {
        flexGrow: 1,
        marginLeft: -drawerWidth,
        overflowY:'auto',
        height: '100vh',
        padding: '24px',
        // transition: (theme) => theme.transitions.create('margin', {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.leavingScreen,
        //   }),
    },
    contentShift: {
        marginLeft: {md: '0px', sm: -drawerWidth},
        transition: (theme) => theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          })
    }

})

export default styles