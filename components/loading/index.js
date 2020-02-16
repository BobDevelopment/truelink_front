import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        padding: 50
    }
});

export default () => {
    const classes = useStyles();
    return <div className={classes.wrapper}>
        <CircularProgress/>
    </div>;
};