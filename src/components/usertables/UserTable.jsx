import React from 'react'
import "./usertable.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function UserTable() {

    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    const rows = [
        {
            id: 212,
            product: "Razer blade 15",
            img: `${process.env.PUBLIC_URL}/images/razer.jpg`,
            customer: "Jhon Smith",
            amount: 783,
            method: "Cash on Delivery",
            status: "Pending"
        },
        {
            id: 214,
            product: "Playstation 5",
            img: `${process.env.PUBLIC_URL}/images/ps5.jpg`,
            customer: "MIchel Doe",
            amount: 900,
            method: "Online Payment",
            status: "Approved"
        },
        {
            id: 216,
            product: "Dell xps 15",
            img: `${process.env.PUBLIC_URL}/images/dell.jpg`,
            customer: "Jane Roy",
            amount: 783,
            method: "Cash on Delivery",
            status: "Pending"
        },
        {
            id: 218,
            product: "ASUS Rog Strix",
            img: `${process.env.PUBLIC_URL}/images/asus.jpg`,
            customer: "Harry Potter",
            amount: 483,
            method: "Google Pay",
            status: "Approved"
        },
        {
            id: 212,
            product: "Razer blade 15",
            img: `${process.env.PUBLIC_URL}/images/razer.jpg`,
            customer: "Jhon Smith",
            amount: 783,
            method: "Cash on Delivery",
            status: "Pending"
        },
        {
            id: 212,
            product: "Razer blade 15",
            img: `${process.env.PUBLIC_URL}/images/asus.jpg`,
            customer: "Jhon Smith",
            amount: 783,
            method: "Net Banking",
            status: "Approved"
        },
        {
            id: 213,
            product: "Razer blade 15",
            img: `${process.env.PUBLIC_URL}/images/ps5.jpg`,
            customer: "Jhon Smith",
            amount: 78,
            method: "Google Pay",
            status: "Approved"
        },
        {
            id: 217,
            product: "Dell Laptop",
            img: `${process.env.PUBLIC_URL}/images/dell.jpg`,
            customer: "Jhon Smith",
            amount: 73,
            method: "Net Banking",
            status: "Pending"
        },
    ];
    return (
        <TableContainer component={Paper} className='table'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell className="tableCell">Product</TableCell>
                        <TableCell className="tableCell">Customer</TableCell>
                        <TableCell className="tableCell">Amount</TableCell>
                        <TableCell className="tableCell">Method</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="tableCell">{row.id}</TableCell>
                            <TableCell className="cellWrapper">
                                <img src={row.img} alt="" className="image" />
                                {row.product}
                            </TableCell>
                            <TableCell className="tableCell">{row.customer}</TableCell>
                            <TableCell className="tableCell">{row.amount}</TableCell>
                            <TableCell className="tableCell">{row.method}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                style={{ position: 'sticky', bottom: 0, background: "white" }}
                className="pagination"
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    )
}

export default UserTable;