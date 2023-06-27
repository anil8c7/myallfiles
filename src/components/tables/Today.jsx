import React from 'react'
import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Stack from '@mui/material/Stack';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
function Today() {

    const clickedFunction = () => {
        console.log('Button clicked!');
    };


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
            dispatch: "1/04/2023",
            time:"12:14PM",
            pDelivery: "04/04/2023",
            ponumber: {
                postoffice: `POHRGUM000352`,
                colony: "friends colony",
                rs: "2500",

            },
            retailer: "Jhon Smith",
            location: {
                city: "Kaithal",
                state: "Haryana"
            },
            pa: "Anil Sharma",
            rpm: "Anil Sharma"
        },
        {
            dispatch: "1/04/2023",
            time:"12:14PM",

            pDelivery: "04/04/2023",
            ponumber: {
                postoffice: `POHRGUM000352`,
                colony: "friends colony",
                rs: "2500",

            },
            retailer: "Jhon Smith",
            location: {
                city: "Kaithal",
                state: "Haryana"
            },
            pa: "Anil Sharma",
            rpm: "Anil Sharma"
        },
        {
            dispatch: "1/04/2023",
            time:"12:14PM",
            pDelivery: "04/04/2023",
            ponumber: {
                postoffice: `POHRGUM000352`,
                colony: "friends colony",
                rs: "2500",

            },
            retailer: "Jhon Smith",
            location: {
                city: "Kaithal",
                state: "Haryana"
            },
            pa: "Anil Sharma",
            rpm: "Anil Sharma"
        }, {
            dispatch: "1/04/2023",
            time:"12:14PM",
            pDelivery: "04/04/2023",
            ponumber: {
                postoffice: `POHRGUM000352`,
                colony: "friends colony",
                rs: "2500",

            },
            retailer: "Jhon Smith",
            location: {
                city: "Kaithal",
                state: "Haryana"
            },
            pa: "Anil Sharma",
            rpm: "Anil Sharma"
        },

        {
            dispatch: "1/04/2023",
            time:"12:14PM",
            pDelivery: "04/04/2023",
            ponumber: {
                postoffice: `POHRGUM000352`,
                colony: "friends colony",
                rs: "2500",

            },
            retailer: "Jhon Smith",
            location: {
                city: "Kaithal",
                state: "Haryana"
            },
            pa: "Anil Sharma",
            rpm: "Anil Sharma"
        },
        {
            dispatch: "1/04/2023",
            time:"12:14PM",
            pDelivery: "04/04/2023",
            ponumber: {
                postoffice: `POHRGUM000352`,
                colony: "friends colony",
                rs: "2500",

            },
            retailer: "Jhon Smith",
            location: {
                city: "Kaithal",
                state: "Haryana"
            },
            pa: "Anil Sharma",
            rpm: "Anil Sharma"
        },

    ];
    return (
        <TableContainer component={Paper} className='todayTable'>
            <Table sx={{ minWidth: 800 }}>
                <TableHead className='tableHead'>
                    <TableRow className='thead'>
                        <TableCell className="tableCell">Dispatch Date</TableCell>
                        <TableCell className="tableCell">Planned Delivery Date</TableCell>
                        <TableCell className="tableCell">PO Details</TableCell>
                        <TableCell className="tableCell">Retailer Name</TableCell>
                        <TableCell className="tableCell">Location</TableCell>
                        <TableCell className="tableCell">PA Name</TableCell>
                        <TableCell className="tableCell">RPM Name</TableCell>
                        <TableCell className="tableCell">Deivery Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="tableCell"><Stack direction="column"><div className='postnumber'>{row.dispatch}</div>
                                <div className='otherdetails'>
                                    <span> {row.time}</span>
                                </div>
                            </Stack>
                            </TableCell>                            
                            <TableCell className="tableCell">{row.pDelivery}</TableCell>
                            <TableCell className="tableCell"><Stack direction="column"><div className='postnumber'>{row.ponumber.postoffice}</div>
                                <div className='otherdetails'>
                                    <span>{row.ponumber.colony} |</span>
                                    <span> {row.ponumber.rs}</span>
                                </div>
                            </Stack>
                            </TableCell>
                            <TableCell className="tableCell">{row.retailer}</TableCell>
                            <TableCell className="tableCell"><Stack direction="column"><div className='postnumber'>{row.location.city}</div>
                                <div className='otherdetails'>
                                    <span>({row.location.state})</span>
                                </div>
                            </Stack>
                            </TableCell>
                            <TableCell className="tableCell">{row.pa}</TableCell>
                            <TableCell className="tableCell">{row.rpm}</TableCell>
                            <TableCell className="tableCell"><Button onClick={clickedFunction} label="Select" /></TableCell>
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
function Button(props) {
    return (
        <>
            <button className='buttonDesign' onClick={props.onClick}>{props.label}</button>
        </>
    );
}

export default Today;