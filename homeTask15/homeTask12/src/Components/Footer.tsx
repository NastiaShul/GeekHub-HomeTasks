import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
const CustomContainer = styled(Container)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
	flexDirection: "column",
	textAlign: "center",
	},
}));

const IconBox = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: "1rem",
	[theme.breakpoints.down("md")]: {
	justifyContent: "center",
	},
}));

return (
	<Box sx={{ py: 10 }}>
	<CustomContainer>
		<Box>
			<Typography
			sx={{
				fontSize: "20px",
				color: "#000339",
				fontWeight: "700",
				mb: 2,
			}}
			>
			Follow us
			</Typography>

			<Typography
			sx={{
				fontSize: "16px",
				color: "#ccc",
				fontWeight: "500",
				mb: 2,
			}}
			>
			You’ll find all fresh news here.
			</Typography>

			<IconBox>
			<img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
			<img
				src={twitterIcon}
				alt="twitterIcon"
				style={{ cursor: "pointer" }}
			/>
			<img
				src={linkedinIcon}
				alt="linkedinIcon"
				style={{ cursor: "pointer" }}
			/>
			</IconBox>
		</Box>
	</CustomContainer>
	</Box>
);
};

export default Footer;
