import { createTheme } from "@mui/material";

const styles = createTheme({
    main: {
        display:'flex',
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        width: "100%",
        backgroundImage:  `url("./main/bg-main.png")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: {sm: 'auto'},
        
        
    },
    gridMainLeft: {
        flex: {   xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
        maxWidth: {md : '66.66% !important', sm: '100% !important' },
        flexBasis: {md : '66.66% !important', sm: '100% !important' },
        marginTop: {sm: '0%'}
    },
    gridMainLeftTop: {
        flex: {   xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
        maxWidth: '100% !important',
        flexBasis: '100% !important',
        height: { md: '65vh', sm: '50vh'}
    },
    gridMainLeftTopBox: {
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        height: "100%",
        width: "100%",
        padding: "80px",
        flex: {   xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
        justifyContent: {sm: 'center'},
        textAlign: { sm: 'center'}
    },
    gridMainLeftTopTextMain: {
        fontSize: '70px',
        fontWeight: 'bolder',
        color: '#ffffff',
        marginBottom: '10%',
        flex: {   xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
        marginBottom: {sm: '8%'},
        fontSize: {xs: '25px', md: '70px'}
    },
    gridMainLeftTopTextEnd: {
        // flex: {   xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
        fontSize: '50px',
        fontWeight: 'bolder',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'start',
        fontSize: {xs: '20px', sm: '40px'},
        justifyContent: {sm: 'center', md: 'flex-start', xs: 'center'},
        
    },
    gridMainLeftBottom: {
        flex: {   xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
        maxWidth: '100% !important',
        flexBasis: '100% !important',
        marginTop: {sm: '2%'}
    },
    gridMainRight: {
        flex: {   xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
        maxWidth: {md: '33.33% !important', sm: '100% !important', xs: '100% !important'},
        flexBasis: {md: '33.33% !important' ,sm: '100% !important', xs: '100% !important' },
        display: { sm: "flex", xs: 'flex',md: 'inline'},
        flexDirection: 'column',
        marginTop: {sm: '12%', md: '32px'},
        flexDirection: {sm: 'row', xs: 'row', md: 'column'}
    },
    dividerStyle: {
        // flex: {   xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
        width: '70%',
        margin: 'auto',
        backgroundColor: {md: 'rgb(169 169 169)'},
        display: {xs: 'none', md: 'inherit'}
    },
    gridMainRightBox: {
        display: "flex",
        flexWrap: 'nowrap',
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
        height: "33%",
        // maxWidth: {sm: '33.33% !important'},
        // flexBasis: {sm: '33.33% !important'}
    },
    gridMainRightBoxUnder: {
        maxWidth: {sm: '100% !important',md: '50% !important'},
        flexBasis: {sm: '100% !important',md: '50% !important'}
    },
    mainRightBoxUnderLeft: {
        flex: {   xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
        height: "100%",
        width: "100%",
        justifyContent: {sm: 'center',md: 'flex-end'}

    },
    mainRightBoxUnderRight: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "80%",
        textAlign: "center",
        width: {sm: '100%', md: '80%'}
    },
    imgLogo: {
        flex: {   xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
        width: "200px",
        width: {sm: '150px', xs: '100px'}

    },
    titleDesc: {
        color: '#E8E8E8',
        fontSize: {xs: '16px', sm:'18px', md: '20px'},
        fontWeight: 'bolder'
    },
    buttonClick: {
        padding: '18px',
        border: '2px solid #fff',
        borderRadius: '30px',
        color: '#ffff',
        margin: '15px',
        textTransform: 'none',
        fontSize: '18px',
        // flex: {   xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
        fontSize: {xs: '16px', md: '18px'},
        width: {xs: '200px', md: '400px', sm: '400px'}
    },
    logoMain: {
        flex: {   xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
        width: "64px",
        width: {xs: '48px'}
    },
    logoSvoa: {
        flex: {   xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
        width: "64px",
        width: {xs: '48px'}
    },
    boxRight: {
        display: 'flex',
        flexDirection: 'row'
    },
    typography:{
        fontFamily: 'Roboto'
    }
})

export default styles