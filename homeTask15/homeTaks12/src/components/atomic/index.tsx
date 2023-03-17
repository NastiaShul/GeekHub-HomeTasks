import { Typography, Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const NavLink = styled(Typography)(({ theme }) => ({
   fontSize: "16px",
   color: theme.palette.primary.main,
   cursor: "pointer",
   "&:hover": {
      textDecoration: "underline",
   },
}));

const NavbarLinksBox = styled(Box)(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   gap: theme.spacing(3),
   [theme.breakpoints.down("md")]: {
      display: "none",
   },
}));

const NavbarContainer = styled(Container)(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   justifyContent: "space-between",
   padding: theme.spacing(5),
   [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
   },
}));

const NavbarLogo = styled("img")(({ theme }) => ({
   [theme.breakpoints.down("md")]: {
      display: "none",
   },
}));

const CustomContainer = styled(Container)(({ theme }) => ({
   marginTop: "50px",
   [theme.breakpoints.down("md")]: {
      textAlign: "center",
   },
}));

const IconBox = styled(Box)(({ theme }) => ({
   display: "flex",
   gap: "1rem",
   [theme.breakpoints.down("md")]: {
      justifyContent: "center",
   },
}));

const HeroBox = styled(Box)(({ theme }) => ({
   marginBottom: "20px",
   padding: "10px",
   [theme.breakpoints.down("md")]: {
      textAlign: "center"
   },
}));

const CustomBox = styled(Box)(({ theme }) => ({
   display: "flex",
   justifyContent: "center",
   marginTop: "20px",
   [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
   },
}));

const Title = styled(Typography)(({ theme }) => ({
   fontSize: "64px",
   fontWeight: "bold",
   margin: "20px 0 20px 0",
   [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
   },
}));

const WrapperContainer = styled(Container)<any>(({ theme }) => ({
   backgroundColor: theme.palette.neutral[theme.palette.mode]
}));

export {
   NavLink,
   NavbarLinksBox,
   NavbarContainer,
   NavbarLogo,
   CustomContainer,
   IconBox,
   HeroBox,
   CustomBox,
   Title,
   WrapperContainer
};