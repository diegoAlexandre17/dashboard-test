import DonutChart from "./DonutChart";
import Map from "./Map";

const Principal = () => {
  return (
    <div className="d-flex justify-content-between flex-column-responsive">
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
