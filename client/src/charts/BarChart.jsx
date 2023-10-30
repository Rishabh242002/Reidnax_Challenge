import React, { useEffect } from "react";
import { Chart } from "react-google-charts";
import { useContext } from 'react';
// import { useToggleContext } from '../context/MyContext';
import { useState } from "react";
import mycontext from "../context/MyContext";

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Revenue, Expenses, and Profit: 2014-2020",
  },
  colors: ["rgb(53,138,148)", "rgb(37,11,165)","#188310"],
};

export default function BarChart() {
  // const {database , setDatabase} = useToggleContext();
  const context = useContext(mycontext);
  const {getdata,data} = context;
  const [dat,setDat] = useState([["Year", "Revenue", "Expenses", "Profit"],]);

  useEffect(()=>{
    if(!dat){
      getdata();
    }
    getalldata();
  },[])

  const getalldata = ()=>{
    data.map((da)=>{
      const vals = Object.values(da);
      dat.push([String(vals[4]),vals[0],vals[1],vals[2]]);
    })
  }

  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={dat}
      options={options}
    />
  );
}

// import React from "react";
// import { Chart } from "react-google-charts";

// export const data = [
//   ["Year", "Sales", "Expenses", "Profit"],
//   ["2014", 1000, 400, 200],
//   ["2015", 1170, 460, 250],
//   ["2016", 660, 1120, 300],
//   ["2017", 1030, 540, 350],
// ];

// export const options = {
//   chart: {
//     title: "Company Performance",
//     subtitle: "Sales, Expenses, and Profit: 2014-2017",
//   },
// };

// export default function BarChart() {
//   return (
//     <Chart
//       chartType="Bar"
//       width="100%"
//       height="400px"
//       data={data}
//       options={options}
//     />
//   );
// }

