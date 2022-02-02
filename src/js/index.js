//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

function SimpleCounter(props) {
	return (
		<div className="Counter">
			<div id="icono" className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="cuatro">{props.digCuatro % 10}</div>
			<div className="tres">{props.digTres % 10}</div>
			<div className="dos">{props.digDos % 10}</div>
			<div className="uno">{props.digUno % 10}</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	digCuatro: PropTypes.number,
	digTres: PropTypes.number,
	digDos: PropTypes.number,
	digUno: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const cuatro = Math.floor(counter / 1000);
	const tres = Math.floor(counter / 100);
	const dos = Math.floor(counter / 10);
	const uno = Math.floor(counter / 1);
	console.log(cuatro, tres, dos, uno);
	counter++;
	ReactDOM.render(
		<SimpleCounter
			digUno={uno}
			digDos={dos}
			digTres={tres}
			digCuatro={cuatro}
		/>,
		document.querySelector("#app")
	);
}, 1000);
