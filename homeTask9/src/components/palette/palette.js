import { useState, useEffect } from 'react';

import Background from "../background/background";
import AverageColor from "../averageColor/averageColor";
import DominantColor from '../dominantColor/dominantColor';

import "./palette.css";

function Palette() {
	const [rgbColor, setRgbColor] = useState({ red: 127, green: 127, blue: 127 });
	const [averageColors, setAverageColors] = useState({ red: [127], green: [127], blue: [127] });

	const isDominantRed = rgbColor.red > (rgbColor.green + rgbColor.blue) / 2;
	const isDominantGreen = rgbColor.green > (rgbColor.red + rgbColor.blue) / 2;
	const isDominantBlue = rgbColor.red > (rgbColor.green + rgbColor.red) / 2;

	const dominantColor = isDominantRed ? "red" : isDominantGreen ? "green" : isDominantBlue ? "blue" : "All colors are equal";

	const changeColor = () => {
		const red = Math.floor(Math.random() * 255),
			green = Math.floor(Math.random() * 255),
			blue = Math.floor(Math.random() * 255);

		setRgbColor({red, green, blue});
		setAverageColors((prevState) => {
			return {
				red: [...prevState.red, red],
				green: [...prevState.green, green],
				blue: [...prevState.blue, blue],
			}
		});
	}

	return (
		<div className="palette">
			<DominantColor dominantColor={dominantColor} />
			<Background rgbColor={rgbColor} changeColor={changeColor} />
			<AverageColor averageColors={averageColors} />
		</div>
	);
}

export default Palette;
