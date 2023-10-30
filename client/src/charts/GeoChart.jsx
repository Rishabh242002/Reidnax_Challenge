import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Locations"],
  ["Germany", 200],
  ["United States", 1000],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["China", 600],
  ["SA",400],
  ["RU", 700],
  ["India",1200],
  ["Australia",700],
];

export default function GeoChart() {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="300px"
      data={data}
    />
  );
}
