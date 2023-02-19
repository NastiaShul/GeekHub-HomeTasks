import * as React from "react";
import { useState } from "react";
import { ColorModeContext } from './Theme';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Container } from "@mui/system";
import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	FormGroup,
	FormControlLabel,
	Switch,
	styled,
} from "@mui/material";
import logoImg from "../media/logoSW.png";


export const Navbar = () => {

	const [mobileMenu, setMobileMenu] = useState({
		left: false,
	});
	const [checkedTheme, setCheckedTheme] = useState(false);

	const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setMobileMenu({ ...mobileMenu, [anchor]: open });
	};

	const colorMode = React.useContext(ColorModeContext);

	const handleChange = () => {
		colorMode.toggleColorMode();
		setCheckedTheme(checkedTheme => !checkedTheme)
	}

	const list = (anchor: string) => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
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
		</Box>
	);

	const NavLink = styled(Typography)(() => ({
		fontSize: "14px",
		color: "#ccc",
		fontWeight: "bold",
		cursor: "pointer",
		"&:hover": {
			color: "#fff",
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

	const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
		cursor: "pointer",
		display: "none",
		marginRight: theme.spacing(2),
		[theme.breakpoints.down("md")]: {
			display: "block",
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
		cursor: "pointer",
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	}));

	return (
		<NavbarContainer>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "2.5rem",
				}}
			>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<CustomMenuIcon onClick={toggleDrawer("left", true)} />
					<Drawer
						anchor="left"
						open={mobileMenu["left"]}
						onClose={toggleDrawer("left", false)}
					>
						{list("left")}
					</Drawer>
					<NavbarLogo sx={{ width: 120 }} src={logoImg} alt="logo" />
				</Box>

				<NavbarLinksBox>
					<NavLink variant="body2">Home</NavLink>
					<NavLink variant="body2">Features</NavLink>
					<NavLink variant="body2">Listed</NavLink>
					<NavLink variant="body2">Contact</NavLink>
				</NavbarLinksBox>
			</Box>

			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "1rem",
				}}>
				<FormGroup>
					<FormControlLabel control={<Switch onChange={handleChange} checked={checkedTheme} />} sx={{ color: "#ccc" }} label="Switch Theme" />
				</FormGroup>
			</Box>
		</NavbarContainer>
	);
};

export default Navbar;
