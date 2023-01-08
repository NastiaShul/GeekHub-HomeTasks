import "./averageColor.css";

const getAverage = (averageColors, color) =>
	Math.floor(averageColors[color].reduce((colorAcc, currentValue) =>
		colorAcc + currentValue, 0) / averageColors[color].length);


function AverageColor({ averageColors }) {
	const red = getAverage(averageColors, 'red');
	const green = getAverage(averageColors, 'green');
	const blue = getAverage(averageColors, 'blue');
	return (
		<div className="average-color">
			<h2>
				The Average color is: rbg({red}, {green}, {blue})
			</h2>
		</div>
	)
}

export default AverageColor;