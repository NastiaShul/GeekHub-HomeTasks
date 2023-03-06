import React from 'react';
import { ThemeProvider } from "@mui/material";
import Main from "./components/Main";
import { ColorModeContext, useMode } from "./theme/index";

function App() {
   const [theme, colorMode] = useMode();
   
   return (
      <ColorModeContext.Provider value={colorMode}>
         <ThemeProvider theme={theme}>
            <Main />
         </ThemeProvider>
      </ColorModeContext.Provider>
   );
}

export default App;
