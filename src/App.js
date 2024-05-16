import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from '../src/scenes/dashboard/index'
import { themeSettings } from "./theme";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
  return (
    <ThemeProvider theme={darkTheme}>
        <Router>
            <Box  sx={{ bgcolor: '#2a2d64', color: 'white' }}>
            <Stack direction="row"  justifyContent={"center"}>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                {/* Add more routes for other components */}
              </Switch>
            </Stack>
          </Box>
        </Router>
    </ThemeProvider>
  );
}

export default App;
