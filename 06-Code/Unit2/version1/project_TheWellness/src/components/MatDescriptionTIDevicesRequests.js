import FeedIcon from "@mui/icons-material/Feed";
import { IconButton, Modal, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import {getReportsByState} from "../services/repairRequestTIDevicesAxios"


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MatDescriptionTIDevicesRequests = (props) => {
  const data = props.data;
  const confirmation = props.confirmation;
  
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    id: data.id,
    idUser: data.idUser,
    idLocal: data.idLocal,
    idTIDevice: data.idTIDevice,
    date: data.date,
    description: data.description
  });

  console.log(values)

  /*useEffect(() => {
    async function loadReports() {
      const response = await getReportsByState(confirmation.state)

      if (response.status === 200) {
        setValues(response.data)
          
      }
    }

    loadReports();
  }, [confirmation]);*/

  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <>
      <IconButton
        color="secondary"
        aria-label="add an alarm"
        onClick={handleOpenModal}
      >
        <FeedIcon
          style={{
            color: "#2196f3",
          }}
        />
      </IconButton>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <h1 align="center">Descripción de solicitud</h1>
          <br />

          {/* Description */}
          <hr />
          <p name="description" id="description">
            {values.description}
          </p>
        </Box>
      </Modal>
    </>
  );
};
export default MatDescriptionTIDevicesRequests;
