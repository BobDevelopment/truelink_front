import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    post: {
        padding: '15px 15px 40px'
    }
});
const Post = (props) => {
    const classes = useStyles();

    const { post } = props;

    return <div className={classes.post}>
        <Typography
            align='justify'
            gutterBottom={true}
            color='primary'
            variant='h4'
        >
            {post.title}
        </Typography>
        <Typography
            align='justify'
            gutterBottom={true}
            variant='body1'
        >
            {post.body}
        </Typography>
    </div>
};

export default Post;