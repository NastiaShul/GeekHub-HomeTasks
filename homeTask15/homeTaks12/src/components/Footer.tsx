import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { colorDefinitions } from "../theme";
import { CustomContainer, IconBox } from "./atomic";

import facebook from "../media/ic-facebook.png";
import twitter from "../media/ic-twitter.png";
import linkedin from "../media/ic-linkdin.png";

const Footer: React.FC = (): JSX.Element => {
   const theme = useTheme();
   const colors = colorDefinitions(theme.palette.mode);

   return (
      <CustomContainer>
         <Box>
            <Typography
               fontSize="20px"
               fontWeight="700"
               marginBottom="10px"
               color={colors.black.DEFAULT}
            >
               Follow us
            </Typography>
            <Typography
               fontSize="16px"
               fontWeight="500"
               marginBottom="10px"
               color={colors.primary.DEFAULT}
            >
               You’ll find all fresh news here.
            </Typography>

            <IconBox>
               <img src={facebook} alt="facebook" style={{ cursor: "pointer" }} />
               <img src={twitter} alt="twitterIcon" style={{ cursor: "pointer" }} />
               <img src={linkedin} alt="linkedinIcon" style={{ cursor: "pointer" }} />
            </IconBox>
         </Box>
      </CustomContainer>
   );
};

export default Footer;