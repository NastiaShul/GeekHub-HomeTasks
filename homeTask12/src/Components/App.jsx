import React from 'react';
import Main from "./Main";
import Properties from "./Properties";
import Footer from "./Footer";
import { Box, useTheme} from "@mui/material";

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
