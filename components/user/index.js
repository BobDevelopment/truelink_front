import { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Loading from 'components/loading';
import { request } from 'helpers/requestHelper';
import { prepareLink } from 'helpers/urlHelper';

const useStyles = makeStyles(theme => {
    return {
        header: {
            background: theme.palette.grey['300']
        },
        title: {
            fontSize: 16,
        },
        subheader: {
            fontSize: 14,
            textDecoration: 'none',
            color: theme.palette.grey['600']

        }
    }
});

const User = (props) => {
    const classes = useStyles();

    const { id } = props;
    const [user, setUser] = useState( {loading: true});

    useEffect(() => {
        (async () => {
            const userResponse = await request(`/users/${id}`);
            const user = await userResponse.json();
            setUser(user);
        })();
    }, []);

    if (user.loading) {
        return <Loading/>;
    }

    return <Card>
        <CardHeader
            title={`${user.name} (${user.username})`}
            subheader={<a className={classes.subheader} href={`mailto:${user.email}`}>{user.email}</a>}
            avatar={<AccountCircleIcon />}
            classes={{
                root: classes.header,
                title: classes.title
            }}
        />
        <CardContent>
            <Typography
                align='center'
                variant='body2'
            >
                {user.company?.name}
            </Typography>
            <Typography
                align='center'
                variant='body2'
            >
                <a href={`tel:${user.phone}`}>{user.phone}</a>
            </Typography>
            <Typography
                align='center'
                variant='body2'
            >
                <a href={prepareLink(user.website)} target='_blank'>{user.website}</a>
            </Typography>
        </CardContent>
    </Card>;
};

export default User;