import React, { useEffect, useState } from "react";
import { Modal, Slide, Box } from "@mui/material";

const CustomModal = ({ open, handleClose, children }) => {
  const [delayedOpen, setDelayedOpen] = useState(false);

  useEffect(() => {
    let timer;
    if (open) {
      timer = setTimeout(() => setDelayedOpen(true), 100);
    } else {
      timer = setTimeout(() => setDelayedOpen(false), 100);
    }
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Slide direction="left" in={delayedOpen} mountOnEnter unmountOnExit>
        <Box
          sx={{
            minWidth: "230px",
            width: "40%",
            background: "#112240",
            height: "100%",
          }}
        >
          {children}
        </Box>
      </Slide>
    </Modal>
  );
};

export default CustomModal;
