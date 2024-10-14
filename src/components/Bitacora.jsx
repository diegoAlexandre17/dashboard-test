import React from "react";
import DonutChart from "./DonutChart";
import Map from "./Map";
import { Chip } from "@mui/material";

const Bitacora = () => {
  return (

      <div className="d-flex justify-content-between flex-column-responsive-principal gap-1">
        <div>
          <h3 className="mx-0">Su pedido se encuentra actualmente en la siguiente ubicación</h3>
          <Map />
        </div>
        <div className="d-flex flex-column justify-content-between align-items-center h-100">
          
          <DonutChart
            title={"Cantidad de pedidos"}
            labels={["Entregados", "En camino", "Por entregar"]}
            colors={["#F0BA22", "#12DC6C", "#6D7EE8"]}
            series={[55, 41, 17]}
          />
          <div className="mx-1">
            <Chip label="Pedidos asegurados: 10" color="success" />
          </div>
        </div>
      </div>
  );
};

export default Bitacora;
