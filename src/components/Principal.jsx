import DonutChart from "./DonutChart";
import Map from "./Map";

const Principal = () => {
  return (
    <div className="d-flex justify-content-between flex-column-responsive-principal gap-1">
      <div>
        <DonutChart />
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
};

export default Principal;
