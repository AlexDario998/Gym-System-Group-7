import { Modal, Box, Button } from "@mui/material";
import React, { useState } from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

const ModalDataRegistered = (props) => {
    const modal = props.modal
    const setModal = props.setModal
    const message = props.message

    return (
      <>
        <Modal open={modal} onClose={() => setModal(false)}>
          <Box sx={style}>
            <h2 align="center">{message}</h2>
            <br />
            <Button
                variant="contained"
                size = "large"
                type="submit"
                onClick={() => setModal(false)}
                sx={{
                    boxShadow: '1px 1px 5px #333',
                    marginTop: "5%",
                    marginLeft: "20%",  
                    background: '#ffb74d',  /* fallback for old browsers */
                    background: 'linear-gradient(to right, #ffb74d, #ffb74d)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    width:'60%'
                }}   
            >
                Aceptar
            </Button>
          </Box>
        </Modal>
      </>
    );
  };
  export default ModalDataRegistered;