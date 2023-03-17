import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Heroes from "./Heroes";
import { CustomBox, Title, WrapperContainer } from "./atomic";
import { colorDefinitions } from "../theme";

import mainImg from "../media/main.png";

const Main: React.FC = (): JSX.Element => {
   const theme = useTheme();
   const colors = colorDefinitions(theme.palette.mode)

   return (
      <WrapperContainer>
         <Navbar />
         <CustomBox>
            <Box flex="1">
               <Typography color={colors.black.DEFAULT}
                  fontSize="18px"
                  fontWeight="500"
               > Welcome to the Star Wars Fun Page
               </Typography>
               <Title variant="h1" color={colors.black.DEFAULT}>
                  Find more about your favorite Heros
               </Title>
            </Box>
            <Box flex="1.25">
               <img src={mainImg} alt="mainImg" style={{ maxWidth: "100%" }}
               />
            </Box>
         </CustomBox>
         <Heroes />
         <Footer />
      </WrapperContainer>
   );
};

export default Main;