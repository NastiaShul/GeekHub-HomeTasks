import { createContext, useState, useMemo } from 'react'
import { createTheme } from '@mui/material'

export const colorDefinitions = (mode) => ({
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
})

export const themeSettings = (mode) => {
   const colors = colorDefinitions(mode)
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
   }
}

export const ColorModeContext = createContext({
   toggleColorMode: () => { },
})

export const useMode = () => {
   const [mode, setMode] = useState('light')

   const colorMode = useMemo(
      () => ({
         toggleColorMode: () =>
            setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
      }),
      [],
   )

   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

   return [theme, colorMode]
}
