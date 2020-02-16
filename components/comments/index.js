import { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Loading from 'components/loading';
import { request } from 'helpers/requestHelper';

const useStyles = makeStyles(theme => {
    return {
        wrapper: {
            marginTop: 50
        },
        header: {
            background: theme.palette.grey['200']
        },
        title: {
            fontSize: 14,
        },
        subheader: {
            fontSize: 12,
            textDecoration: 'none',
            color: theme.palette.grey['600']
        },
        comment: {
            marginBottom: 15
        },
        text: {
            fontSize: 12
        }
    }
});

const Comments = (props) => {
    const classes = useStyles();

    const { postId } = props;
    const [comments, setComments] = useState( {loading: true} );

    useEffect(() => {
        (async () => {
            const commentsResponse = await request(`/comments?postId=${postId}`);
            const comments = await commentsResponse.json();
            setComments(comments);
        })();
    }, []);

    if (comments.loading) {
        return <Loading/>;
    }

    return <div className={classes.wrapper}>
        {comments.map(comment => (
            <Card key={comment.id} className={classes.comment}>
                <CardHeader
                    title={comment.name}
                    subheader={<a className={classes.subheader} href={`mailto:${comment.email}`}>{comment.email}</a>}
                    avatar={<AccountCircleIcon />}
                    classes={{
                        root: classes.header,
                        title: classes.title
                    }}
                />
                <CardContent>
                    <Typography
                        align='justify'
                        variant='body2'
                        className={classes.tText}
                    >
                        {comment.body}
                    </Typography>
                </CardContent>
            </Card>
        ))}
    </div>
};

export default Comments;