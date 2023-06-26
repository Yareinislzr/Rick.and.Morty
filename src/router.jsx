import { Box } from "@mui/material";
import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import { BarraNavegation } from "./Componentes/BarraNavegation";
import { Charters } from "./Componentes/Charters";
import { Inicio } from "./Componentes/Inicio";
import { Filtros } from "./Componentes/Filtros";
import {
  Independiente,
  LoaderIndependiente,
} from "./Componentes/Independiente";
import { Individual, LoaderIndividual } from "./Componentes/Individual";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Box>
        <BarraNavegation />
        <Outlet />
      </Box>
    ),
    children: [
      {
        path: "",
        element: <Inicio />,
      },
      {
        path: "Inicio",
        element: <Inicio />,
      },
      {
        path: "Filtros",
        element: <Filtros />,
      },
      {
        path: "Charters",
        element: <Charters />,
      },
      {
        path: "Independiente",
        element: <Independiente />,
        loader: LoaderIndependiente,
      },

      {
        path: "/Individual/:id",
        element: <Individual />,
        loader: LoaderIndividual,
      },
    ],
  },
]);
