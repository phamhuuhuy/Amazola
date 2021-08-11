import { pink } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    huy1: {
        width: "120%",
        cursor: 'default'
    },
    pink: {
        color: theme.palette.getContrastText(pink[300]),
        backgroundColor: pink[300],
    },
}));