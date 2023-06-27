import React from 'react'
import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Stack from '@mui/material/Stack';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
function Pending() {

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
      orderno: "#233554",
      pDelivery: "04/04/2023",
      ponumber: {
        postoffice: `POHRGUM000352`,
        colony: "friends",
        rs: "2500",

      },
      retailer: "Jhon Smith",
      location: {
        city: "Kaithal",
        state: "Haryana"
      },
      price: "10000",
      rpm: "Anil Sharma"
    },
    {
      orderno: "#233554",
      pDelivery: "04/04/2023",
      ponumber: {
        postoffice: `POHRGUM000352`,
        colony: "friends",
        rs: "2500",

      },
      retailer: "Jhon Smith",
      location: {
        city: "Kaithal",
        state: "Haryana"
      },
      price: "18000",
      rpm: "Anil Sharma"
    },
    {
      orderno: "#233554",
      pDelivery: "04/04/2023",
      ponumber: {
        postoffice: `POHRGUM000352`,
        colony: "friends",
        rs: "2500",

      },
      retailer: "Jhon Smith",
      location: {
        city: "Kaithal",
        state: "Haryana"
      },
      price: "21000",
      rpm: "Anil Sharma"
    }, {
      orderno: "#233554",
      pDelivery: "04/04/2023",
      ponumber: {
        postoffice: `POHRGUM000352`,
        colony: "friends",
        rs: "2500",

      },
      retailer: "Jhon Smith",
      location: {
        city: "Kaithal",
        state: "Haryana"
      },
      price: "3300",
      rpm: "Anil Sharma"
    },

    {
      orderno: "#233554",
      pDelivery: "04/04/2023",
      ponumber: {
        postoffice: `POHRGUM000352`,
        colony: "friends",
        rs: "2500",

      },
      retailer: "Jhon Smith",
      location: {
        city: "Kaithal",
        state: "Haryana"
      },
      price: "24556",
      rpm: "Anil Sharma"
    },
    {
      orderno: "#233554",
      pDelivery: "04/04/2023",
      ponumber: {
        postoffice: `POHRGUM000352`,
        colony: "friends",
        rs: "2500",

      },
      retailer: "Jhon Smith",
      location: {
        city: "Kaithal",
        state: "Haryana"
      },
      price: "800000",
      rpm: "Anil Sharma"
    },
    {
      orderno: "#233554",
      pDelivery: "04/04/2023",
      ponumber: {
        postoffice: `POHRGUM000352`,
        colony: "friends",
        rs: "2500",

      },
      retailer: "Jhon Smith",
      location: {
        city: "Kaithal",
        state: "Haryana"
      },
      price: "800000",
      rpm: "Anil Sharma"
    },
    {
      orderno: "#233554",
      pDelivery: "04/04/2023",
      ponumber: {
        postoffice: `POHRGUM000352`,
        colony: "friends",
        rs: "2500",

      },
      retailer: "Jhon Smith",
      location: {
        city: "Kaithal",
        state: "Haryana"
      },
      price: "800000",
      rpm: "Anil Sharma"
    },
    {
      orderno: "#233554",
      pDelivery: "04/04/2023",
      ponumber: {
        postoffice: `POHRGUM000352`,
        colony: "friends",
        rs: "2500",

      },
      retailer: "Jhon Smith",
      location: {
        city: "Kaithal",
        state: "Haryana"
      },
      price: "800000",
      rpm: "Anil Sharma"
    },

  ];
  return (
    <TableContainer component={Paper} className='pendingtable'>
      <Table sx={{ minWidth: 800 }}>
        <TableHead className='tableHead'>
          <TableRow>
            <TableCell className="tableCell">Order Id</TableCell>
            <TableCell className="tableCell">Planned Delivery Date</TableCell>
            <TableCell className="tableCell">PO Details</TableCell>
            <TableCell className="tableCell">Location</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Deivery Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{
          "& tr:nth-of-type(2n+1)": {
            backgroundColor: "gray.100",
          }
        }}>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className="tableCell">{row.orderno}</TableCell>
              <TableCell className="tableCell">{row.pDelivery}</TableCell>
              <TableCell className="tableCell"><Stack direction="column"><div className='postnumber'>{row.ponumber.postoffice}</div>
                <div className='otherdetails'>
                  <span>{row.ponumber.colony} |</span>
                  <span> {row.ponumber.rs}</span>
                </div>
              </Stack>
              </TableCell>
              <TableCell className="tableCell"><Stack direction="column"><div className='postnumber'>{row.location.city}</div>
                <div className='otherdetails'>
                  <span>({row.location.state})</span>
                </div>
              </Stack>
              </TableCell>
              <TableCell className="tableCell">${row.price}</TableCell>
              <TableCell className="tableCell"><Button onClick={clickedFunction} label="Pending" /></TableCell>
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

export default Pending;