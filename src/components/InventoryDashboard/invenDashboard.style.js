import { createTheme } from "@mui/material";

const styles = createTheme({
    buttonStock: {
        color: '#6D6D6D',
        backgroundColor: '#E6EBF4',
        width: '250px',
        height: '80px',
        borderRadius: '18px',
        fontSize: '18px',
        textTransform: 'capitalize'
    },
    paper: {
        height: '633px',
    },
    gridData: {
        height: '211px'
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        height: 'inherit',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxDataTop:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '-webkit-fill-available',
        justifyContent: 'space-evenly'
    },
    textNum: {
        fontFamily: 'Prompt',
        fontSize: 46,
        color: '#707070'
    },
    textlast: {
        fontSize: 24,
        color: '#707070'
    },
    textBottom: {
        marginTop: 10,
        fontSize: 18,
        color: '#707070'
    },
    textGrid: {
        fontFamily: 'Prompt',
        fontSize: 46,
        color: '#707070',
        paddingRight: 80
    }

})

export default styles