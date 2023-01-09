import "./dashboardTable.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const DashboardTable = () => {

    const rows = [
        {
          id: "Lendsqr",
          username: "Adedeji",
          email: "Adedeji@gmail.com",
          phone: "08012345678",
          date:  "May 15, 2020 10:00AM",
          status: "Inactive",
        },
        {
          id: "Irorun",
          username: "Debby Ogana",
          email: "debby2@gmail.com",
          phone: "08012345678",
          date:  "April 30, 2020 10:00AM",
          status: "Pending",
        },
        {
          id: "Lendstar",
          username: "Grace Effiom",
          email: "Geffiom@gmail.com",
          phone: "08012345678",
          date:  "April 30, 2020 10:00AM",
          status: "Pending",
        },
        {
          id: "Lendsqr",
          username: "Tosin Dokunmu",
          email: "dokunmu.tosin@gmail.com",
          phone: "08012345678",
          date:  "April 10, 2020 9:00AM",
          status: "Active",
        },
        {
          id: "Lendstar",
          username: "Grace Effiom",
          email: "Geffiom@gmail.com",
          phone: "08012345678",
          date:  "April 10, 2020 9:00AM",
          status: "Pending",
        },
        {
            id: "Lendsqr",
            username: "Tosin Dokunmu",
            email: "Adedeji@gmail.com",
            phone: "08012345678",
            date:  "April 10, 2020 9:00AM",
            status: "Active",

        },
        {
          id: "Lendstar",
          username: "Grace Effiom",
          email: "Adedeji@gmail.com",
          phone: "08012345678",
          date:  "July 15, 2020 11:30AM",
          status: "Pending",
        },
        {
            id: "Lendsqr",
            username: "Tosin Dokunmu",
            email: "Adedeji@gmail.com",
            phone: "08012345678",
            date:  "July 15, 2020 11:30AM",
            status: "Active",


        },
        {
          id: "Lendstar",
          username: "Grace Effiom",
          email: "Adedeji@gmail.com",
          phone: "08012345678",
          date:  "July 15, 2020 11:30AM",
          status: "Pending",

        },

        {
          id: "Lendstar",
          username: "Grace Effiom",
          email: "Adedeji@gmail.com",
          phone: "08012345678",
          date:  "July 15, 2020 11:30AM",
          status: "Pending",
        },
        {
          id: "Lendstar",
          username: "Grace Effiom",
          email: "Adedeji@gmail.com",
          phone: "08012345678",
          date:  "July 15, 2020 11:30AM",
          status: "Pending",
        },
        {
          id: "Lendstar",
          username: "Grace Effiom",
          email: "Adedeji@gmail.com",
          phone: "08012345678",
          date:  "July 15, 2020 11:30AM",
          status: "Pending",
        },
        {
          id: "Lendstar",
          username: "Grace Effiom",
          email: "Adedeji@gmail.com",
          phone: "08012345678",
          date:  "July 15, 2020 11:30AM",
          status: "Pending",
        },
        {
          id: "Lendstar",
          username: "Grace Effiom",
          email: "Adedeji@gmail.com",
          phone: "08012345678",
          date:  "July 15, 2020 11:30AM",
          status: "Pending",

        },
        {
          id: "Lendstar",
          username: "Grace Effiom",
          email: "Adedeji@gmail.com",
          phone: "08012345678",
          date:  "July 15, 2020 11:30AM",
          status: "Pending",
        },
      ];


    return ( 
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">ORGANIZATION</TableCell>
              <TableCell className="tableCell">USERNAME</TableCell>
              <TableCell className="tableCell">EMAIL</TableCell>
              <TableCell className="tableCell">PHONE NUMBER</TableCell>
              <TableCell className="tableCell">DATE JOINED</TableCell>
              <TableCell className="tableCell">STATUS</TableCell>   
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">{row.username}</TableCell>
                <TableCell className="tableCell">{row.email}</TableCell>
                <TableCell className="tableCell">{row.phone}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell> 
                <TableCell className="tableCell">
                      <span className={`status ${row.status}`}>
                          {row.status}
                      </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </TableContainer>
    
     );
}
 
export default DashboardTable;