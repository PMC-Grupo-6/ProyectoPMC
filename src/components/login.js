import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import {auth} from "../firebase-config" 
import { useAlert } from 'react-alert'



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  enviar: {
    margin: theme.spacing(3, 0, 2),
  },
  footer: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
  },
}));

export default function Login() {
  const classes = useStyles();
  const [mail, setEmail] = useState("");
  const [contra, setPassword] = useState("");
  const history = useHistory()
  const alert = useAlert()

  const submit = async () => {
    try{
      auth.createUserWithEmailAndPassword(mail.trim(), contra)
      alert.show("Registro exitoso")
    }
    catch(error){
     switch(error.code) {
          case 'auth/email-already-in-use':
                alert.show("El correo electronico ya está en uso")
                break;
          case 'auth/invalid-email':
                alert.show("Debe ingresar un email valido")
                break;
          case 'auth/invalid-password':
                alert.show("La contraseña es invalida")
                break;
          case 'auth/weak-password':
                alert.show("La contraseña es debil")
                break;
          default:
                 alert.show(error.message)
                  break;
                  
       }
       
      
    }
   
  };

  const signIn = async () => {
    auth.signInWithEmailAndPassword(mail.trim(), contra).catch(error=>{
      console.log(error.code)
      switch(error.code) {
        case 'auth/user-not-found':
              alert.show("Debe registrarse para poder iniciar sesion")
              break;
        case 'auth/wrong-password':
              alert.show("La contraseña no es correcta")
              break;
        default:
          alert.show(error.message)
          break;
     }

    });
    history.push("/")
  };

  const logOut = async () => {
    await auth.signOut();
  };

  var user = auth.currentUser;

 

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          {
            user  &&
            <>
             <Typography component="h3" >
          Bienvenido a Clack 
          </Typography>
          <Typography component="h3" >
          {user.email}
        </Typography>
        <Link to="/">
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.enviar}
            onClick={logOut}
          >
            <a  href="/" class="btn btn-success">Cerrar Sesion</a>
          </Button>
          </Link>
          
         
        </>
          }
          {!user &&
            <>
          <Typography component="h1" variant="h5">
            Iniciar Sesión
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <Link to="/">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={signIn}
                >
                  Iniciar Sesion
                  
                </Button>
                <br/>
                <br/>
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  onClick={submit}
                >
                  Registrarse
                  
                </Button>
                </Link>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
               
              </Grid>
            </Grid>
          </form>
          </>
          }
        </div>
      </Container>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
}
