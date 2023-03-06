import * as React from "react";
import Typography from "@mui/material/Typography";
import {
   FormGroup,
   FormControlLabel,
   Switch,
   useTheme,
} from "@mui/material";
import { ColorModeContext, colorDefinitions } from '../../theme';

export const ThemeSwitcher = () => {
   const colorMode = React.useContext(ColorModeContext);
   const theme = useTheme();
   const mode = theme.palette.mode;
   const colors = colorDefinitions(mode)

   const handleChange = () => {
      colorMode.toggleColorMode();
   }

   return (
      <FormGroup>
         <FormControlLabel control={<Switch onChange={handleChange} checked={mode === 'dark'} />} label={<Typography color={colors.black.DEFAULT}>Switch Theme</Typography>} />
      </FormGroup>
   );
};

export default ThemeSwitcher;
