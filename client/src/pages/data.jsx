import * as React from "react";
import { useState, useEffect } from "react";
import Sidenav from "../components/Sidenav";
import { Box, Divider, Typography } from "@mui/material";
import NavBar from "../components/navbar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "../App.css";
import Skeleton from "@mui/material/Skeleton";
// import { useToggleContext } from "../context/MyContext"
import mycontext from "../context/MyContext";
import { useContext } from "react";


const columns = [
  {
    id: "year",
    label: "Year",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "revenue",
    label: "Revenue",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "expenses",
    label: "Expense",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "profit",
    label: "Profit",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
];

export default function Data() {

  // const [data, setData] = useState([]);
  const [page, setPage] = React.useState(10);
  // const [database, setDataBase] = useToggleContext();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // console.log(database)
  const context = useContext(mycontext);
  const {getdata,data} = context;

  useEffect(() => {
    // fetch("http://localhost:8000/")
    //   .then((response) => {
    //     console.log(typeof(response))
    //     return response.json()})
    
    //   .then((item) => {
        
    //     setData(item)
    //     setDataBase(item)
    //     console.log(database)
    //   })
    getdata();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }; 

  return (
    /*<>
    <div className="display-area">
        <h2>Data From Api Displayed down below</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.revenue}>
                  <td>{item.expenses}</td>
                  <td>{item.profit}</td>
                  <td>{item.year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>*/
    <div className="bgcolor">
      <NavBar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {data.length &&
          (<Paper sx={{ width: "100%", overflow: "hidden" }}>
            <Typography gutterBottom variant="h5" component="div" sx={{padding:"20px"}}>Apple Income Statement 2009-2023 | AAPL</Typography>
            <Divider/>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data && data.map((row) => {
                    // console.log(row)
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 20, 100]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>)}
          {data.length==0 && (
            <Paper sx={{width:"98%", overflow:"hidden" ,padding:"12px"}}>
                <Box height={20}/>
                <Skeleton variant="rectangular" width={"100%"} height={30}/>
                <Box height={40}/>
                <Skeleton variant="rectangular" width={"100%"} height={60}/>
                <Box height={20}/>
                <Skeleton variant="rectangular" width={"100%"} height={60}/> 
                <Box height={20}/>
                <Skeleton variant="rectangular" width={"100%"} height={60}/> 
                <Box height={20}/>
                <Skeleton variant="rectangular" width={"100%"} height={60}/>
                <Box height={20}/>
                <Skeleton variant="rectangular" width={"100%"} height={60}/>
                <Box height={20}/>
                <Skeleton variant="rectangular" width={"100%"} height={60}/> 
            </Paper>
          )

          }
        </Box>
      </Box>
    </div>
  );
}
