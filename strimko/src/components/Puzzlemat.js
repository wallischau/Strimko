import React, {Component} from "react";
import "../style/style.css";

const PuzzleMat = ({mat}) => {
	const selectedMat = `/assets/images/${mat}`;
	return (
		<div>
			<img className="mat" src={selectedMat} alt="playmat_noline.jpg"/>
		</div>
		);
};

export default PuzzleMat;
