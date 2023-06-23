import React, { useEffect, useState } from "react";
import { Lista } from "./Lista";
import { Pagina } from "./Pagina";
import { Box } from "@mui/system";

export const Charters = ({ gender, status, specie }) => {
  const [characters, setCharacters] = useState([]);

  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      let url = `https://rickandmortyapi.com/api/character?page=${page}`;

      if (gender) {
        url = url + `&gender=${gender}`;
      }
      if (status) {
        url = url + `&status=${status}`;
      }
      if (specie) {
        url = url + `&species=${specie}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchData();
  }, [page, gender, status, specie]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#e0e4ce",
        overflowX: "hidden",
        pt: "48px",
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Pagina page={page} setPage={setPage} />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexWrap: "Wrap",
          gap: "10px",
          padding: "15px",
        }}
      >
        <Lista characters={characters} />
      </Box>
      <Box>
        <Pagina page={page} setPage={setPage} />
      </Box>
    </Box>
  );
};
