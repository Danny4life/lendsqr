export const userColumns = [
    { 
        field: 'id', headerName: 'ID', width: 60,
       
    },
    {
        field: "organization", headerName:"ORGANIZATION", width:140, 
    },
    {
        field: "username", headerName: "USERNAME", width: 160,
    },
    {
      field: "email", headerName: "EMAIL", width: 160,
  },
    {
        field: "phone", headerName: "PHONE NUMBER", width: 160,
    },
    {
        field: "date", headerName: "DATE JOINED", width: 180,
    },
    {
        field: "status", headerName: "STATUS", width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
   
]





export const userRows = [
    {
      id: 1,
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phone: "08033676732",
      date: "May 15, 2020 10:00am",
      status: "Inactive",
    },
    {
      id: 2,
      organization: "Irorun",
      username: "Debby Ogana",
      email: "debby2@irorun.com",
      phone: "08033676732",
      date: "April 30, 2020 11:00am",
      status: "Blacklisted",
    },
    {
      id: 3,
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phone: "08033676732",
      date: "May 30, 2020 06:45am",
      status: "Active", 
    },
    {
      id: 4,
      organization: "Lendsqr",
      username: "Tosun Dokunmu",
      email: "tosin@lendsqr.com",
      phone: "08033676732",
      date: "April 10, 2020 10:00am",
      status: "Active",
    },
    {
      id: 5,
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phone: "08033676732",
      date: "April 30, 2020 10:00am",
      status: "Blacklisted",
    },
    {
      id: 6,
      organization: "Lendsqr",
      username: "Tosun Dokunmu",
      email: "tosin@lendsqr.com",
      phone: "08033676732",
      date: "April 12, 2020 03:40pm",
      status: "Active",
    },
    {
      id: 7,
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phone: "08033676732",
      date: "April 10, 2020 09:00am",
      status: "Blacklisted",
    },
    {
      id: 8,
      organization: "Lendsqr",
      username: "Tosun Dokunmu",
      email: "tosin@lendsqr.com",
      phone: "08033676732",
      date: "April 20, 2020 11:00am",
      status: "Inactive",
    },
    {
      id: 9,
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phone: "08033676732",
      date: "April 30, 2020 10:30am",
      status: "Active",
    },
    {
      id: 10,
      organization: "Lendsqr",
      username: "Grace Abbey",
      email: "gabbey@lendsqr.com",
      phone: "08033676732",
      date: "June 10, 2020 12:00pm",
      status: "Active",
    },
    {
        id: 11,
        organization: "Lendsqr",
        username: "Grace Abbey",
        email: "gabbey@lendsqr.com",
        phone: "08033676732",
        date: "June 10, 2020 12:00pm",
        status: "Active",
      },
      {
        id: 12,
        organization: "Lendsqr",
        username: "Grace Abbey",
        email: "gabbey@lendsqr.com",
        phone: "08033676732",
        date: "June 10, 2020 12:00pm",
        status: "Active",
      },
      {
        id: 13,
        organization: "Lendsqr",
        username: "Grace Abbey",
        email: "gabbey@lendsqr.com",
        phone: "08033676732",
        date: "June 10, 2020 12:00pm",
        status: "Active",
      },
  ];