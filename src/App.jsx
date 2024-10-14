import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography:{
    fontFamily:[
      'poppins'
    ]
  },
  palette: {
    success: {
      main: "#12DC6C",
    },
    primary:{
      main: '#243EDB'
    },
    secondary:{
      main:'#0B144F'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
