import { createContext, useState, useMemo } from 'react';
import { createTheme, PaletteMode } from '@mui/material';

export interface Colors {
   primary: {
      DEFAULT: string;
   };
   black: {
      DEFAULT: string;
      500?: string;
   };
   white: {
      DEFAULT: string;
      100?: string;
   };
   accentMain: string;
}

export const colorDefinitions = (mode: PaletteMode): Colors => ({
   ...(mode === 'dark'
      ? {
         primary: {
            DEFAULT: '#7C7C7C',
         },
         black: {
            DEFAULT: '#B2B2B2',
            500: '#0F0E0E',
         },
         white: {
            DEFAULT: '#FFFFFF',
            100: '#F7F7F7',
         },
         accentMain: '#0F0E0E',
      }
      : {
         primary: {
            DEFAULT: '#7C7C7C',
         },
         white: {
            DEFAULT: '#FFFFFF',
            100: '#F7F7F7',
         },
         black: {
            DEFAULT: '#494747',
            500: '#494747',
         },
         accentMain: '#F7F7F7',
      }),
});

export const themeSettings = (mode: PaletteMode) => {
   const colors = colorDefinitions(mode);
   return {
      palette: {
         mode: mode,
         ...(mode === 'dark'
            ? {
               neutral: {
                  dark: colors.black[500],
                  light: colors.white[100],
               },
            }
            : {
               neutral: {
                  dark: colors.black[500],
                  light: colors.white[100],
               },
            }),
      },
   };
};

interface ColorModeContextProps {
   toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextProps>({
   toggleColorMode: () => { },
});

export const useMode = (): [{}, ColorModeContextProps] => {
   const [mode, setMode] = useState<PaletteMode>('light');

   const colorMode = useMemo(
      () => ({
         toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
      }),
      []
   );

   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

   return [theme, colorMode];
};