import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

import mainImg from "../media/main.png";
import CustomButton from "./CustomButton";

const Main = () => {
const CustomBox = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	gap: theme.spacing(5),
	marginTop: theme.spacing(3),
	[theme.breakpoints.down("md")]: {
	flexDirection: "column",
	alignItems: "center",
	textAlign: "center",
	},
}));

const Title = styled(Typography)(({ theme }) => ({
	fontSize: "64px",
	color: "#000336",
	fontWeight: "bold",
	margin: theme.spacing(4, 0, 4, 0),
	[theme.breakpoints.down("sm")]: {
	fontSize: "40px",
	},
}));

return (
	<Container>
		<Navbar />
		<CustomBox>
		<Box sx={{ flex: "1" }}>
			<Typography
			variant="body2"
			sx={{
				fontSize: "18px",
				color: "#ccc",
				fontWeight: "500",
				mt: 10,
				mb: 4,
			}}
			>
			Welcome to the Star Wars Fun Page
			</Typography>
			<Title variant="h1">
			Find more about your favorite Heros
			</Title>
			<CustomButton
			backgroundColor="#000336"
			color="#ccc"
			buttonText="More About Us"
			mainBtn={true}
			/>
		</Box>

		<Box sx={{ flex: "1.25" }}>
			<img
			src={mainImg}
			alt="mainImg"
			style={{ maxWidth: "100%", marginBottom: "2rem" }}
			/>
		</Box>
		</CustomBox>
	</Container>
);
};

export default Main;
