import CssBaseline from '@material-ui/core/CssBaseline';
import LegalizeProcess from "./components/LegalizeContainer"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./assets/theme"

function App() {
  return (
    <div style={{height: "100vh"}}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar/>
        <div style={{height: "calc(100% - 64px)", display: "flex",
        flexDirection: "column"}}>
          <LegalizeProcess style={{flex: "1 0 auto"}}/>
          <div style={{flexShrink: "0"}}>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
