import FiltroGender from "./FiltroGender";
import FiltroSpecie from "./FiltroSpecie";
import FiltroStatus from "./FiltroStatus";
import { Box } from "@mui/material";

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
        display: { xs: "block", md: "flex" },
        flexDirection: "column",
        justifyContent: "center",
        alignItems: { xs: "center", md: "none" },
        paddingTop: "10px",
        height: "100vh",
        background: "#6e9987",
        color: "black",
        position: { xs: "absolute", md: "fixed" },
        width: { xs: "100%", md: "20%" },
        pl: { xs: "220px", md: "0px" },
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
