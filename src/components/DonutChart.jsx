import { Card, CardContent, Chip, Typography } from "@mui/material";

import Chart from "react-apexcharts";

const DonutChart = ({ title, labels, colors, series }) => {
  const options = {
    labels: labels,
    colors: colors,
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        donut: {
          size: "45%",
        },
      },
    },
    legend: {
      show: true,
      fontFamily: "Poppins, Helvetica, Arial",
      fontWeight: 600,
      offsetY: 80,
      offsetX: 10,
    },
  };

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <Card
        variant="outlined"
        className="box-shadow-card"
        sx={{ backgroundColor: "#FAFAFA" }}
      >
        <CardContent>
          <Typography>{title}</Typography>
          <Chart options={options} series={series} type="donut" width="450" />
        </CardContent>
      </Card>
    </div>
  );
};

export default DonutChart;
