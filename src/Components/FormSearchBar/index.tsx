import React, { useContext } from "react";

import { UserContext } from "../../Contexts/UserContext";

import { TextField, makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { FormWrapper } from "./style";

export const FormSearchBar: React.FC = () => {
  const { products, setFilteredProdutcs, searchItem } = useContext(UserContext);

  // const useStyles = makeStyles({
  //   root: {
  //     "& .MuiInputBase-root": {
  //       // Estilos para o elemento raiz do TextField
  //       // Por exemplo, a cor de fundo
  //       backgroundColor: "lightblue",
  //     },
  //     "& .MuiInputBase-input": {
  //       // Estilos para o input do TextField
  //       // Por exemplo, a cor do texto
  //       color: "darkblue",
  //     },
  //     "& .MuiInputBase-input::placeholder": {
  //       // Estilos para o placeholder do TextField
  //       // Por exemplo, a cor do placeholder
  //       color: "gray",
  //     },
  //     "& .MuiOutlinedInput-root": {
  //       // Estilos para o TextField com a variante "outlined"
  //       // Por exemplo, a cor da borda
  //       borderColor: "green",
  //     },
  //     "& .MuiFilledInput-root": {
  //       // Estilos para o TextField com a variante "filled"
  //       // Por exemplo, a cor de fundo do TextField preenchido
  //       backgroundColor: "lightyellow",
  //     },
  //     "& .MuiInputLabel-root": {
  //       // Estilos para o rótulo do TextField
  //       // Por exemplo, a cor do rótulo
  //       color: "purple",
  //     },
  //   },
  // });

  // const classes = useStyles();

  return (
    <FormWrapper
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => searchItem(event)}
    >
      <label htmlFor="input-search"></label>

      <TextField
        // className={classes.root}
        onChange={e => {
          if (e.target.value === "") {
            setFilteredProdutcs(products);
          }
        }}
        id="input-search"
        fullWidth
        variant="outlined"
        label="Digitar pesquisa"
        type="search"
        title="search"
        autoComplete="autoComplete"
        InputProps={{
          endAdornment: (
            <>
              <IconButton name="Pesquisar" type="submit">
                <SearchIcon />
              </IconButton>
            </>
          ),
        }}
      />
    </FormWrapper>
  );
};
