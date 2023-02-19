import { Box, useTheme} from "@mui/material";
import Main from "./Main";
import Footer from "./Footer";
import Properties from "./Properties";

function App() {
	const theme = useTheme();

	return (
			<Box sx={{backgroundColor: theme.palette.mode === 'dark' ? "#2d343b" : "#e4ecf5"}}>
				<Main />
				<Properties />
				<Footer />
			</Box>
	);
}

export default App;
