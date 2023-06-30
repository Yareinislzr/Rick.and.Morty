import React, { useEffect, useState } from "react";
import { Lista } from "./Lista";
import { Pagina } from "./Pagina";
import { Box } from "@mui/system";
import Modal from "./Modal";

export const Charters = ({
  gender,
  status,
  specie,
  setStatus,
  setGender,
  setSpecie,
}) => {
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
        justifyContent: "center",
        height: "auto",
        backgroundColor: "#e0e4ce",
        pt: "48px",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <Modal
            gender={gender}
            setGender={setGender}
            status={status}
            setStatus={setStatus}
            specie={specie}
            setSpecie={setSpecie}
          />
        </Box>
        <Box>
          <Pagina page={page} setPage={setPage} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "Wrap",
          justifyContent: "center",
          alignItems: "center",
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
