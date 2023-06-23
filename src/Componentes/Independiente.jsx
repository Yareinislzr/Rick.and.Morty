import { useLoaderData } from "react-router-dom";

export const Independiente = () => {
  const { lista } = useLoaderData();
  console.log(lista);
  return lista
    ? lista.map((item) => {
        return <h1>{item.name}</h1>;
      })
    : null;
};

export const LoaderIndependiente = async () => {
  let url = "https://rickandmortyapi.com/api/character/";
  try {
    const res = await fetch(url);
    const response = await res.json();
    return { lista: response.results };
  } catch (e) {
    console.error(e);
    return {
      lista: [],
    };
  }
};
