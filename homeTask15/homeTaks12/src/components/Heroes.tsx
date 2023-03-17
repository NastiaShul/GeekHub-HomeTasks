import React, { useEffect, useState } from "react";
import {
   Container,
   Box,
   Typography,
   useTheme,
   CircularProgress
} from "@mui/material";

import { HeroBox } from "./atomic";
import { getCharacters } from '../services/SWServices';
import { colorDefinitions } from "../theme";

interface Character {
   name: string;
   height: string;
   mass: string;
   birth_year: string;
}

const Heroes: React.FC = (): JSX.Element => {
   const [chars, setChars] = useState<Character[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const theme = useTheme();
   const colors = colorDefinitions(theme.palette.mode);

   useEffect(() => {
      const fetchChars = async () => {
         const char = await getCharacters();
         setChars(char);
         setIsLoading(false);
      }
      fetchChars();
   }, []);

   return (
      <Container>
         <Typography
            fontSize="24px"
            fontWeight="700"
            marginBottom="20px"
            textAlign="center"
            color={colors.black.DEFAULT}
         >You don't know about it:</Typography>
         {isLoading ?
            <CircularProgress />
            :
            chars.slice(0, 5).map(char =>
               <HeroBox
                  key={char.name}
                  boxShadow={`5px 3px 4px ${colors.primary.DEFAULT}`}>
                  <Typography
                     fontSize="20px"
                     marginBottom="10px"
                     color={colors.primary.DEFAULT}>
                     {char.name}
                  </Typography >
                  <Box >
                     <Typography color={colors.black.DEFAULT} fontSize="14px">Height: {char.height}</Typography >
                     <Typography color={colors.black.DEFAULT} fontSize="14px">Mass: {char.mass}</Typography >
                     <Typography color={colors.black.DEFAULT} fontSize="14px">Birth year: {char.birth_year}</Typography >
                  </Box>
               </HeroBox>
            )
         }
      </Container>
   )
}

export default Heroes;