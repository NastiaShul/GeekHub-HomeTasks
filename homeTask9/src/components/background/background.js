import "./background.css";

function Background({ rgbColor, changeColor }) {
	const cssOutPut = `rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`;

	return (
		<div 
			className="background"
			onClick={changeColor} 
			style={{ background: cssOutPut }}>
		</div>
	)
}

export default Background;