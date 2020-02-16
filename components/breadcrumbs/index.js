import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    wrapper: {
        marginLeft: 20,
        fontSize: 10,
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.grey['600']
    },
    current: {
        cursor: 'default',
        fontSize: 10,
        fontWeight: 500,
        color: theme.palette.grey['600']
    }
}));

export default (props) => {
    const classes = useStyles();

    const { post } = props;

    return <Breadcrumbs className={classes.wrapper} aria-label='breadcrumb'>
        <Link className={classes.link} href='/'>
            Posts
        </Link>
        <Typography className={classes.current} color='primary'>{post.title}</Typography>
    </Breadcrumbs>
};