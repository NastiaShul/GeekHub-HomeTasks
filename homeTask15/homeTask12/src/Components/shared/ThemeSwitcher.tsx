import * as React from "react";
import Typography from "@mui/material/Typography";
import {
   FormGroup,
   FormControlLabel,
   Switch,
   useTheme,
} from "@mui/material";
import { ColorModeContext, colorDefinitions, Colors } from '../../theme';

export const ThemeSwitcher: React.FC = () => {
   const colorMode = React.useContext(ColorModeContext);
   const theme = useTheme();
   const mode = theme.palette.mode;
   const colors: Colors = colorDefinitions(mode)

   const handleChange = () => {
      colorMode.toggleColorMode();
   }

   return (
      <FormGroup>
         <FormControlLabel
            control={
               <Switch
                  onChange={handleChange} checked={mode === 'dark'}
               />
            }
            label={
               <Typography
                  color={colors.primary.DEFAULT}>
                  Switch Theme
               </Typography>} />
      </FormGroup>
   );
};

export default ThemeSwitcher;