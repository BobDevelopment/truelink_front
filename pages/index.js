import React from 'react';
import Router from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { request } from 'helpers/requestHelper';

const useStyles = makeStyles({
    table: {
        minWidth: 320,
        maxWidth: 1000,
        margin: '0 auto'
    },
    headCell: {
        cursor: 'default'
    },
    cell: {
        cursor: 'pointer',
        padding: '10px 18px'
    }
});

const PostsPage = props => {
    const classes = useStyles();

    const { rows } = props;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const openPost = id => {
        return Router.push({
            pathname: `/post/${id}`
        });
    };

    return (
        <TableContainer>
            <Table className={classes.table} aria-label='table with posts'>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.headCell}>Id</TableCell>
                        <TableCell className={classes.headCell}>User Id</TableCell>
                        <TableCell className={classes.headCell}>Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                    ).map(row => (
                        <TableRow onClick={() => openPost(row.id)} key={row.id}>
                            <TableCell className={classes.cell} >{row.id}</TableCell>
                            <TableCell className={classes.cell}>{row.userId}</TableCell>
                            <TableCell className={classes.cell}>{row.title}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
};

PostsPage.getInitialProps = async function() {
    const postsResponse = await request(`/posts`);
    const rows = await postsResponse.json();

    return { rows };
};

export default PostsPage;