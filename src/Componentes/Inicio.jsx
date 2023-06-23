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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: { xs: "100%", md: "auto" },
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
      <Box>
        <Charters
          gender={gender}
          status={status}
          setStatus={setStatus}
          specie={specie}
          setSpecie={setSpecie}
        />
      </Box>
    </Box>
  );
};
