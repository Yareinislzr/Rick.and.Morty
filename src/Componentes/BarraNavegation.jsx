import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export const BarraNavegation = () => {
  const [botones, setBotones] = useState();
  const [user, setUser] = useState(true);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "50px",
        backgroundColor: "#114d4d",
        position: "fixed",
        zIndex: "100",
      }}
    >
      <Box
        sx={{
          width: "40%",
          marginLeft: "10px",
          p: "3px",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
          width="140px"
        ></img>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          gap: "8px",
          width: "60%",
          padding: "20px",
        }}
      >
        <Link to="/Charters">
          <Button variant="contained" color="success">
            Charters
          </Button>
        </Link>
        <Link to="/Inicio">
          <Button
            sx={{
              display: { xs: "none", md: "block", textDecorationLine: "none" },
            }}
            variant="contained"
            color="success"
          >
            Filter
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
