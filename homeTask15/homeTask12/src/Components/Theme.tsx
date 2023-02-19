import React from 'react';
import App from './App';
import {createTheme, ThemeProvider, PaletteMode } from "@mui/material";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function ToggleColorMode() {
	const [mode, setMode] = React.useState<PaletteMode>('light');
	const colorMode = React.useMemo(
	() => ({
		toggleColorMode: () => {
		setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
		},
	}),
	[],
	);

	const theme = React.useMemo(
	() =>
		createTheme({
		palette: {
			mode,
		},
		}),
	[mode],
	);

	return (
	<ColorModeContext.Provider value={colorMode}>
		<ThemeProvider theme={theme}>
		<App />
		</ThemeProvider>
	</ColorModeContext.Provider>
	);
}