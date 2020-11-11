import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [tramite, setTramite] = React.useState("");

  const handleChange = (event) => {
    setTramite(event.target.value);
  };

  const getTramiteDescription = () => {
    if (tramite === 1) {
      return "Una autenticación es un proceso con el que se busca dar fe, respecto a la veracidad de un documento o un hecho que ha ocurrido.";
    } else if (tramite === 2) {
      return "Hacer constar un contrato o un hecho mediante escritura pública.";
    } else {
      return "Por favor seleccionar un tipo de trámite.";
    }
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Escoger tipo de trámite
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={tramite}
          onChange={handleChange}
          label="Tipo de trámite"
        >
          <MenuItem value={1}>Autenticación</MenuItem>
          <MenuItem value={2}>Escrituración</MenuItem>
        </Select>
      </FormControl>
      <br />
      <Typography gutterBottom variant="subtitle">
        {getTramiteDescription()}
      </Typography>
    </div>
  );
}
