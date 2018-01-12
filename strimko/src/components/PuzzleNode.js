import React, { Component } from "react";
import "../style/style.css";

const PuzzleNode = (props) => {
	if (props.hide) {
		console.log("1" + props.hide);
		return (
			<div></div>
		);
	}
	else {
		console.log("2" + props.hide);
		return (
		<div>
			<p>Puzzle node </p>
		</div>
		);
	}
};

export default PuzzleNode;
