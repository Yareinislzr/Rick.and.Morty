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
        width: "100%",
      }}
    >
      <Typography>Page: {props.page} </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          gap: "10px",
        }}
      >
        {props.page >= 1 ? (
          <Button
            variant="contained"
            color="success"
            onClick={() => props.setPage(props.page - 1)}
          >
            Back {props.page}
          </Button>
        ) : (
          ""
        )}
        <Button
          variant="contained"
          color="success"
          onClick={() => props.setPage(props.page + 1)}
        >
          New Page {props.page}
        </Button>
      </Box>
    </Box>
  );
};
