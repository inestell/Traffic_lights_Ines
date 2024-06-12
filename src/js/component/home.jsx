import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ color, setColor] = useState("red");

	return (
		<div className="text-center">
			<div id="grey-container" className="d-flex flex-column">
				<div id="red" className={color === "red" ? "red glow" : "red"} onClick={(e) => setColor("red")}></div>
				<div id="yellow" className={color === "yellow" ? "yellow glow" : "yellow"} onClick={(e) => setColor("yellow")}></div>
				<div id="green" className={color === "green" ? "green glow" : "green"} onClick={(e) => setColor("green")}></div>
			</div>
		</div>
	);
};

export default Home;
