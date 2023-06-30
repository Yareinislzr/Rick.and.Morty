import { Avatar, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const borders = {
  ALIVE: "5px solid green",
  DEAD: "5px solid red",
  UNKNOWN: "5px solid blue",
};

export const Lista = ({ characters }) => {
  const navigate = useNavigate();
  return characters.map((item) => {
    return (
      <Box>
        <Box
          onClick={() => {
            navigate("/Individual/" + item.id);
          }}
        >
          <Avatar
            sx={{
              display: "flex",
              width: "50mm",
              height: " 50mm",
              borderRadius: "50%",
              border: borders[item.status.toUpperCase()],
            }}
            src={item.image}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pb: "4px",
            }}
          >
            <Typography>
              {item.status.toUpperCase()} <br></br>
              {item.name}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  });
};
