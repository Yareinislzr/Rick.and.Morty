import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";

export let Pagina = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px",
        gap:"5px"
      }}
    >
      {props.page >= 1?`Page:${props.page} `:""}
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          gap: "10px",
        }}
      >
        {props.page >=2 ? (
          <Button
            variant="contained"
            color="success"
            onClick={() => props.setPage(props.page - 1)}
          >
            Back 
          </Button>
        ) : (
          ""
        )}
        <Button
          variant="contained"
          color="success"
          onClick={() => props.setPage(props.page + 1)}
        >
          Nex
        </Button>
      </Box>
    </Box>
  );
};
