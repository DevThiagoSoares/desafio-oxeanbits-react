import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { container } from "./style";
import { TableGrid } from "../../Components/TableGrid";
import { columns } from "./columns";
import axios from "axios";
import React from "react";
const apiKey = process.env.REACT_APP_API_KEY;

export function Home() {
  const [gifs, setGifs] = useState<any[]>([]);
  const [search, setSearch] = useState<string>('');
  const [tableKey, setTableKey] = useState<number>(0);

  const makeApi = () => {
    const params = {
      api_key: apiKey,
      q: search,
      limit: 20
    };

    axios.get('https://api.giphy.com/v1/gifs/search', {
      params: params
    })
      .then(res => {
        const transformedData = res.data.data.map((item: any) => ({
          title: item.title,
          image: item.images.fixed_height.url,
          size: item.images.fixed_height.size
        }));
        setGifs(transformedData);
        setTableKey(prevKey => prevKey + 1); // Atualizando a chave da tabela
      }).catch(err => {
        console.log(err);
      });
  };

  const handleSearchClick = () => {
    makeApi();
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <Box sx={container}>
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          value={search}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchClick}>Search</button>
        {/* Adicionando a chave para o componente da tabela */}
        {gifs.length > 0 && <TableGrid key={tableKey} columns={columns} rows={gifs} />}
      </Box>
    </>
  );
}
