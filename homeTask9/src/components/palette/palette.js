import { useState, useEffect } from 'react';

import Background from "../background/background";
import AverageColor from "../averageColor/averageColor";
import DominantColor from '../dominantColor/dominantColor';

import "./palette.css";

function Palette() {
	const [rgbColor, setRgbColor] = useState({ red: 127, green: 127, blue: 127 });
	const [averageColor, setAvarageColor] = useState({});
	const [dominantColor, setDominantColor] = useState("All colors are equal");
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		if (counter === 0) {
			setAvarageColor(rgbColor)
		} else {
			const isDominantRed = rgbColor.red > (rgbColor.green + rgbColor.blue);
			const isDominantGreen = rgbColor.green > (rgbColor.red + rgbColor.blue);

			if (isDominantRed) {
				setDominantColor("red");
			} else if (isDominantGreen) {
				setDominantColor("green");
			} else {
				setDominantColor("blue");
			}

			setAvarageColor(({ red, green, blue }) => {
				return {
					red: Math.floor((red + rgbColor.red) / counter),
					green: Math.floor((green + rgbColor.green) / counter),
					blue: Math.floor((blue + rgbColor.blue) / counter),
				}
			})
		}
	}, [rgbColor, counter])

	const changeColor = () => {
		setRgbColor({
			red: Math.floor(Math.random() * 255),
			green: Math.floor(Math.random() * 255),
			blue: Math.floor(Math.random() * 255)
		});
		setCounter((counter) => counter++);
	}

	return (
		<div className="palette">
			<DominantColor dominantColor={dominantColor} />
			<Background rgbColor={rgbColor} changeColor={changeColor} />
			<AverageColor averageColor={averageColor} />
		</div>
	);
}

export default Palette;
