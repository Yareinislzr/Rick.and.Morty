import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useLoaderData } from "react-router-dom";

export const Individual = () => {
  const { Lista } = useLoaderData();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        background: "#e0e4ce",
      }}
    >
      <Avatar
        sx={{
          display: "flex",
          width: "50mm",
          height: "50mm",
          border: "2px solid white",
        }}
      >
        <img src={Lista.image} width="200mm" height="200mm"></img>
      </Avatar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: { xs: "30%", md: "30%" },
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "22px" },
            border: "solid 2px",
            borderRadius: "7px",
            padding: "5px",
          }}
        >
          Name:{Lista.name}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "22px" },
            border: "solid 2px",
            borderRadius: "7px",
            padding: "5px",
          }}
        >
          Gender: {Lista.gender}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "22px" },
            border: "solid 2px",
            borderRadius: "7px",
            padding: "5px",
            textDecoration: "none",
          }}
        >
          Status:{Lista.status}
        </Typography>
      </Box>
    </Box>
  );
};
export const LoaderIndividual = async ({ params }) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const Lista = await res.json();
  console.log(Lista);
  return { Lista };
};
