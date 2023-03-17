import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import MenuIcon from "@mui/icons-material/Menu";
import {
   Drawer,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   useTheme,
   Hidden,
   styled
} from "@mui/material";

import {
   NavLink,
   NavbarLinksBox,
   NavbarContainer,
   NavbarLogo
} from "./atomic";
import { colorDefinitions } from '../theme';
import ThemeSwitcher from "./shared/ThemeSwitcher";

import logo from "../media/ic-logo.png";

const Navbar: React.FC = (): JSX.Element => {

   const [mobileMenu, setMobileMenu] = useState<{
      left: boolean;
   }>({
      left: false,
   });
   const theme = useTheme();
   const mode = theme.palette.mode;
   const colors = colorDefinitions(mode);

   const toggleDrawer = (anchor: string, open: boolean) => (
      event: React.KeyboardEvent | React.MouseEvent
   ) => {
      setMobileMenu({ ...mobileMenu, [anchor]: open });
   };

   const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
      color: `${colors.black.DEFAULT}`,
      cursor: "pointer",
      display: "none",
      marginRight: theme.spacing(2),
      [theme.breakpoints.down("md")]: {
         display: "block",
      },
   }));

   const list = (anchor: string) => (
      <Box
         sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
         role="presentation"
         onClick={toggleDrawer(anchor, false)}
      >
         <List>
            {["Home", "Features", "Listed", "Contact"].map(
               (text, index) => (
                  <ListItem key={text} disablePadding>
                     <ListItemButton>
                        <ListItemIcon>
                           {index === 0 && <HomeIcon />}
                           {index === 1 && <FeaturedPlayListIcon />}
                           {index === 2 && <ListAltIcon />}
                           {index === 3 && <ContactsIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                     </ListItemButton>
                  </ListItem>
               )
            )}
         </List>
         <ThemeSwitcher />
      </Box>
   );

   return (
      <NavbarContainer>
         <Box display="flex" gap="2.5rem">
            <Box display="flex" alignItems="center">
               <CustomMenuIcon
                  onClick={toggleDrawer("left", true)}
               />
               <Drawer
                  anchor="left"
                  open={mobileMenu["left"]}
                  onClose={toggleDrawer("left", false)}
               >
                  {list("left")}
               </Drawer>
               <NavbarLogo width="100px" src={logo} alt="logo" />
            </Box>

            <NavbarLinksBox>
               <NavLink variant="body2" color={colors.black.DEFAULT}>
                  Home
               </NavLink>
               <NavLink variant="body2" color={colors.black.DEFAULT}>
                  Features
               </NavLink>
               <NavLink variant="body2" color={colors.black.DEFAULT}>
                  Listed
               </NavLink>
               <NavLink variant="body2" color={colors.black.DEFAULT}>
                  Contact
               </NavLink>
            </NavbarLinksBox>
         </Box>
         <Hidden mdDown>
            <ThemeSwitcher />
         </Hidden>
      </NavbarContainer >
   );
};

export default Navbar;