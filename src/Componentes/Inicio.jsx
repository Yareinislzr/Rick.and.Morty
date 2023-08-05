import React, { useState } from "react";
import { Box } from "@mui/system";
import { Filtros } from "./Filtros";
import { Charters } from "./Charters";
export const Inicio = () => {
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [specie, setSpecie] = useState("");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        width:"100%"
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          width: "20%",
        }}
      >
        <Filtros
          gender={gender}
          setGender={setGender}
          status={status}
          setStatus={setStatus}
          specie={specie}
          setSpecie={setSpecie}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: { xs: "100%", md: "80%" },
        }}
      >
        <Charters
          gender={gender}
          setGender={setGender}
          status={status}
          setStatus={setStatus}
          specie={specie}
          setSpecie={setSpecie}
        />
      </Box>
    </Box>
  );
};
