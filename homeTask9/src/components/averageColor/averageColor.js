import "./averageColor.css";

function AverageColor({ averageColor }) {
	return (
		<div className="average-color">
			<h2>
				The Average color is: rbg({averageColor.red}, {averageColor.green}, {averageColor.blue})
			</h2>
		</div>
	)
}

export default AverageColor;