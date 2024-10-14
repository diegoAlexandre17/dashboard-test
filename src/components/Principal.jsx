import { Chip } from "@mui/material";
import DonutChart from "./DonutChart";
import Map from "./Map";

const Principal = () => {
  return (
    <div className="d-flex justify-content-between flex-column-responsive-principal gap-1">
      <div className="d-flex flex-column justify-content-between align-items-center h-100">
        <div className="mx-1">
          <Chip
            label="Total de silobolsas: 9"
            variant="outlined"
            className="me-1"
          />
          <Chip label="Asegurados: 5" color="success" />
        </div>
        <DonutChart
          title={"Estatus silobolsas"}
          labels={["Peligro", "Alerta", "Ok", "Sin datos"]}
          colors={["#EC481C", "#F0BA22", "#12DC6C", "#6D7EE8"]}
          series={[44, 55, 41, 17]}
        />
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
};

export default Principal;
