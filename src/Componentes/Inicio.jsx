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
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "block" },
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
          width: { xs: "auto", md: "80%" },
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
