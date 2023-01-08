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
          product: "Adedeji",
        //   img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Adedeji@gmail.com",
          date: "May 15",
            amount: 785,
        //   method: "Cash on Delivery",
           status: "Inactive",
        },
        {
          id: "Irorun",
          product: "Debby Ogana",
          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Adedeji@gmail.com",
          date: "1 March",
          amount: 900,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: "Lendstar",
          product: "Grace Effiom",
          img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Adedeji@gmail.com",
          date: "1 March",
          amount: 35,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: "Lendsqr",
          product: "Tosin Dokunmu",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "JAdedeji@gmail.com",
          date: "1 March",
          amount: 920,
          method: "Online",
          status: "Active",
        },
        {
          id: "Lendstar",
          product: "Grace Effiom",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "HAdedeji@gmail.coml",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",
        },
        {
            id: "Lendsqr",
            product: "Tosin Dokunmu",
            img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Adedeji@gmail.com",
            date: "1 March",
            amount: 920,
            method: "Online",
            status: "Active",

        },
        {
            id: "Lendstar",
          product: "Grace Effiom",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Adedeji@gmail.com",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",
        },
        {
            id: "Lendsqr",
            product: "Tosin Dokunmu",
            img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Adedeji@gmail.com",
            date: "1 March",
            amount: 920,
            method: "Online",
            status: "Active",


        },
        {
            id: "Lendstar",
          product: "Grace Effiom",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Adedeji@gmail.com",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",

        },

        {
            id: "Lendstar",
          product: "Grace Effiom",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Adedeji@gmail.com",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",

        },
        {
            id: "Lendstar",
          product: "Grace Effiom",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Adedeji@gmail.com",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",

        },
        {
            id: "Lendstar",
          product: "Grace Effiom",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Adedeji@gmail.com",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",

        },
        {
            id: "Lendstar",
          product: "Grace Effiom",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Adedeji@gmail.com",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",

        },
        {
            id: "Lendstar",
          product: "Grace Effiom",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Adedeji@gmail.com",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",

        },
        {
            id: "Lendstar",
          product: "Grace Effiom",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Adedeji@gmail.com",
          date: "1 March",
          amount: 2000,
          method: "Online",
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
            {/* <TableCell className="tableCell">STATUS</TableCell>
             */}
            {/* <TableCell className="tableCell">Payment Method</TableCell> */}
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.product}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell> 
              {/* <TableCell className="tableCell">{row.method}</TableCell> */}
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