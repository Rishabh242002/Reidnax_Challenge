import React, { useEffect } from "react";
import Sidenav from "../components/Sidenav";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import NavBar from "../components/navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "../App.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BarChart from "../charts/BarChart";
import GeoChart from "../charts/GeoChart";
import CountUp from "react-countup";
import { useContext } from 'react';
import mycontext from "../context/MyContext";
// import { useToggleContext } from "../context/MyContext"

function Analytics() {
  const context = useContext(mycontext);
  const {getdata,data} = context;

  useEffect(()=>{
    getdata();
  },[])

  // const {database, setDatabase} = useContext(useToggleContext) 
  return (
    <div className="bgcolor">
      <NavBar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card
                  sx={{ minWidth: 49 + "%", height: 150 }}
                  className="gradient"
                >
                  <CardContent>
                    <div className="iconstyle">
                      <CreditCardIcon />
                    </div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "white" }}
                    >
                      $<CountUp delay={0.4} end={394000} duration={1} />
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "white" }}
                    >
                      Revenue 2022-2023 (In Million)
                    </Typography>
                  </CardContent>
                </Card>
                <Card
                  sx={{ minWidth: 49 + "%", height: 150 }}
                  className="gradientlight"
                >
                  <CardContent>
                    <div className="iconstyle">
                      <ShoppingBagIcon />
                    </div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "white" }}
                    >
                      $<CountUp delay={0.4} end={224000} duration={1} />
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "white" }}
                    >
                      Expenses 2022-2023 (In Million)
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ maxWidth: 345 }} className="gradientlight">
                  <Stack spacing={2} direction="row">
                    <div className="iconstyle">
                      <StorefrontIcon />
                    </div>
                    <div className="paddingall">
                      <span className="pricetitle">
                        {" "}
                        $<CountUp delay={0.4} end={99800} duration={1} />
                      </span>
                      <br />
                      <span className="pricesubtitle">Profit/Loss After Tax (In Million)</span>
                    </div>
                  </Stack>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                  <Stack spacing={2} direction="row">
                    <div className="iconstyleblack">
                      <StorefrontIcon />
                    </div>
                    <div className="paddingall">
                      <span className="pricetitle">
                        {" "}
                        $<CountUp delay={0.4} end={119103} duration={1} />
                      </span>
                      <br />
                      <span className="pricesubtitle">Profit/Loss Before Tax (In Million)</span>
                    </div>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <BarChart />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <div className="paddingall">
                    <span className="pricetitle">Our Global Presence</span>
                    <br />
                  </div>
                  <GeoChart />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Analytics;
