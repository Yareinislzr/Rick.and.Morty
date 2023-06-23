import FiltroGender from "./FiltroGender";
import FiltroSpecie from "./FiltroSpecie";
import FiltroStatus from "./FiltroStatus";
import { Box, Typography } from "@mui/material";

export const Filtros = ({
  gender,
  setGender,
  status,
  setStatus,
  specie,
  setSpecie,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", md: "left" },
        paddingLeft: "10px",
        paddingTop: "50px",
        width: { xs: "100%", md: "200px" },
        height: "100vh",
        overflowY: "hidden",
        overflowX: "hidden",
        background: "#6e9987",
        color: "black",
      }}
    >
      <FiltroStatus status={status} setStatus={setStatus} />
      <br />
      <FiltroGender gender={gender} setGender={setGender} />
      <br />
      <FiltroSpecie specie={specie} setSpecie={setSpecie} />
    </Box>
  );
};
