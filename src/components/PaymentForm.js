import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import { makeStyles } from '@material-ui/core/styles';

import 'react-credit-cards/es/styles-compiled.css'

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
 
export default function PaymentForm() {
  const classes = useStyles();

  const [formValues, setFormValues] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  })
 
  const handleInputFocus = (e) => {
    console.log(e)

    setFormValues({ ...formValues, focus: e.target.name });
  }
  
  const handleInputChange = (e) => {
    console.log(e)
    const { name, value } = e.target;
    
    setFormValues({ ...formValues, [name]: value });
  }

    return (
      <div id="PaymentForm">
        <Cards
          cvc={formValues.cvc}
          expiry={formValues.expiry}
          focused={formValues.focus}
          name={formValues.name}
          number={formValues.number}
          locale={{valid: 'vencimiento'}}
          placeholders={{name: 'tu nombre'}}
        />
        <form className={classes.root} noValidate autoComplete="off">
        	<TextField
          variant="outlined"
            type="tel"
            name="number"
            placeholder="Número de tarjeta de crédito"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <TextField
          variant="outlined"
            name="expiry"
            placeholder="Fecha de vencimiento (MMYY)"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <TextField
          variant="outlined"
            name="name"
            placeholder="Nombres"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <TextField
          variant="outlined"
            name="cvc"
            placeholder="Código de seguridad"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </form>
      </div>
    );
}