import { Box, styled, Typography } from "@mui/material";

type HeroType = {
	img: any, name: string, height: string, mass: string, birth_year: string
}

const Hero = ({ img, name, height, mass, birth_year }: HeroType) => {
	const HeroBox = styled(Box)(({ theme }) => ({
		borderTopLeftRadius: "10px",
		borderTopRightRadius: "10px",
		maxWidth: 350,
		backgroundColor: "#999",
		margin: theme.spacing(0, 2, 0, 2),
		[theme.breakpoints.down("lg")]: {
			maxWidth: 250,
		},
		[theme.breakpoints.down("md")]: {
			maxWidth: 400,
			margin: theme.spacing(2, 0, 2, 0),
		},
	}));

	const ImgContainer = styled(Box)(() => ({
		width: "100%",
	}));

	return (
		<HeroBox>
			<ImgContainer>
				<img src={img} alt="heroPhoto" style={{ maxWidth: "100%" }} />
			</ImgContainer>

			<Box sx={{ padding: "1rem", color: "#000339" }}>
				<Typography variant="body2" sx={{ fontWeight: "700" }}>
					Name: {name}
				</Typography>
				<Typography variant="body2" sx={{ my: 2 }}>
					Height: {height}
				</Typography>
				<Typography variant="body2" sx={{ mt: 1 }}>
					Mass: {mass}
				</Typography>
				<Typography variant="body2" sx={{ mt: 1 }}>
					Birth year: {birth_year}
				</Typography>
			</Box>
		</HeroBox>
	);
};

export default Hero;
