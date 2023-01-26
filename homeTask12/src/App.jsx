import Main from "./Components/Main";
import Properties from "./Components/Properties";
import Footer from "./Components/Footer";
import { Box, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
	status: {
		dark: "#2d343b"
	},
	status: {
		light: "#e4ecf5"
	}
})

function App() {
return (
	<ThemeProvider theme={theme}>
		<Box sx={{backgroundColor: "#2d343b"}}>
			<Main />
			<Properties />
			<Footer />
		</Box>
	</ThemeProvider>
);
}

export default App;
