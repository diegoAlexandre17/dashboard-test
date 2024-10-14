import { Card, CardContent, Typography } from "@mui/material";

import Chart from "react-apexcharts";

const DonutChart = () => {
  const options = {
    labels: ["Peligro", "Alerta", "Ok", "Sin datos"],
    colors: ["#EC481C", "#F0BA22", "#12DC6C", "#6D7EE8"],
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
    legend:{
        show:true,
        fontFamily: 'Poppins, Helvetica, Arial',
        fontWeight: 600,
        offsetY: 80,
        offsetX: 10,
    }
  };

  const series = [44, 55, 41, 17];

  return (
    <div>
      <Card
        variant="outlined"
        className="box-shadow-card"
        sx={{ backgroundColor: "#FAFAFA" }}
      >
        <CardContent>
          <Typography>Estatus silobolsas</Typography>
          <Chart options={options} series={series} type="donut" width="450" />
        </CardContent>
      </Card>
    </div>
  );
};

export default DonutChart;
