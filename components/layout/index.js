import {makeStyles} from '@material-ui/core/styles';

import Header from './header';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }
}));

const Layout = props => {
    const classes = useStyles();

    return <div className={classes.root}>
        <Header/>
        <main className={classes.content}>
            <div className={classes.drawerHeader} />
            {props.children}
        </main>
    </div>
};

export default Layout;