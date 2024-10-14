import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Chip, Link, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Principal from "./Principal";
import Bitacora from "./Bitacora";
import HeaderInfo from "./HeaderInfo";

const Header = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event, newValue) => {
    setCurrentPage(newValue);
  };

  const PageBody = () => {
    if (currentPage === 1) {
      return <Principal />;
    }

    if (currentPage === 2) {
      return <Bitacora />;
    }
  };

  return (
    <>
      <HeaderInfo />

      <div className="d-flex align-items-center justify-content-between mx-1 flex-column-responsive flex-reverse">
        <Tabs
          value={currentPage}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab value={1} label="Principal" />
          <Tab value={2} label="Bitacora" />
        </Tabs>

        <div className="d-flex flex-column text-end text-center-responsive mx-1">
          <Link href="#">
            <span className="text-color fw-bold">Cotizá tu seguro</span>
          </Link>
          <Link href="#">
            <span className="text-color fw-bold">Financiate contus granos</span>
          </Link>
        </div>
      </div>

      <PageBody />
    </>
  );
};

export default Header;
