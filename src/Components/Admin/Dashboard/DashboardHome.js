import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Dashboard.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const DashboardHome = () => {

    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };




    const [booking, setBooking] = useState([])
    useEffect(() => {
        fetch('https://ancient-bastion-82733.herokuapp.com/showAllServiceList')
            .then(response => response.json())
            .then(data => setBooking(data))
    }, [])
    console.log(booking)

    return (
        <div className="dashboard">
            <div className="row">
                <div style={{ fontsize: '60px', margin: '20px', marginTop: '60px', fontWeight: 'bold' }}>
                    Dashboard
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card-item d-flex justify-content-around" >
                        <div className="card card-1" >
                            <div className="card-title-1">
                                <h5>Total service</h5>
                                <h5>{booking.length}</h5>
                            </div>
                        </div>
                        <div className="card card-2">
                            <div className="card-title-2 ">
                                <h5>Total service</h5>
                                <h5>4</h5>
                            </div>
                        </div>
                    
                    </div>
                    <div style={{ margin: '20px' }}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Name</StyledTableCell>
                                        <StyledTableCell>Email</StyledTableCell>
                                        <StyledTableCell>Service</StyledTableCell>
                                        <StyledTableCell>Register Date</StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {booking.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                        <StyledTableRow >
                                            <StyledTableCell>{row.name}</StyledTableCell>
                                            <StyledTableCell>{row.email}</StyledTableCell>
                                            <StyledTableCell>{row.service}</StyledTableCell>
                                            <StyledTableCell>{row.checkIn}</StyledTableCell>

                                        </StyledTableRow>
                                    ))}

                                </TableBody>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 15]}
                                    component="div"
                                    count={booking.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </Table>
                        </TableContainer>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;