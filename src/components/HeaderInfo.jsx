import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Chip } from "@mui/material";

const HeaderInfo = () => {
  return (
    <div className="d-flex align-items-center justify-content-between w-100 flex-column-responsive">
      <div className="d-flex align-items-center gap-1 flex-column-responsive">
        <h3 className="me-2 mx-0">
          Campo 1 <FontAwesomeIcon icon={faCopy} />
        </h3>
        <Chip label="Ok" color="success" />

        <Chip label="Total de granos: 200 (ton)" variant="outlined" />
      </div>

      <div className="mt-1">
        <Button variant="contained" color="primary" sx={{ padding: "15px" }}>
          <small>Editar Establecimiento</small>
        </Button>
      </div>
    </div>
  );
};

export default HeaderInfo;
