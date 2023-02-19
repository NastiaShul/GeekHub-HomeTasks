import { Box, Container, styled, Typography } from "@mui/material";
import Hero from "./Hero";
import CustomButton from "./CustomButton";
import { properties } from "../properties";

const Properties = () => {
   const PropertiesBox = styled(Box)(({ theme }) => ({
      display: "flex",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      [theme.breakpoints.down("md")]: {
         flexDirection: "column",
         alignItems: "center",
      },
   }));

   const PropertiesTextBox = styled(Box)(({ theme }) => ({
      [theme.breakpoints.down("md")]: {
         textAlign: "center",
      },
   }));

   return (
      <Container sx={{ mt: 5, py: 10 }}>
         <PropertiesTextBox>
            <Typography
               sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
            >
               Featured Properties
            </Typography>
            <Typography sx={{ color: "#ccc", fontSize: "16px", mt: 1 }}>
               Everything you need to know when looking for a new home!
            </Typography>
         </PropertiesTextBox>

         <PropertiesBox>
            {properties.map((property) => (
               <Hero
                  key={property.id}
                  img={property.img}
                  name={property.name}
                  height={property.height}
                  mass={property.mass}
                  birth_year={property.birth_year}
               />
            ))}
         </PropertiesBox>
         <CustomButton
            backgroundColor="#000336"
            color="#ccc"
            buttonText="More Heroes"
            mainBtn={true}
         />
      </Container>
   );
};

export default Properties;
