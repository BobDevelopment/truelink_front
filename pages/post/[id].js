import Grid from '@material-ui/core/Grid';

import Breadcrumbs from 'components/breadcrumbs';
import Comments from 'components/comments';
import Post from 'components/post';
import User from 'components/user';

import { request } from 'helpers/requestHelper';

const PostPage = props => {
    const { post } = props;

    return <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
            <Breadcrumbs post={post} />
            <Post post={post}/>
            <Comments postId={post.id}/>
        </Grid>
        <Grid item xs={12} md={4}>
            <User id={post.userId}/>
        </Grid>
    </Grid>
};


PostPage.getInitialProps = async (context) => {
    const { id } = context.query;
    const postData = await request(`/posts/${id}`);
    const post = await postData.json();

    return { post };
};

export default PostPage;