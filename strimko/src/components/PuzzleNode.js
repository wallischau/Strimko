import React, { Component } from "react";
import "../style/style.css";


const PuzzleNode = (props) => {
	let  action = props.action;
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
			<div className="pickNumMenu">
				<div className="numItem" onClick={(e) => {
					e.stopPropagation();
				    e.nativeEvent.stopImmediatePropagation();
					action(1, e);}
					 }>1
				</div>								
				<div className="numItem" onClick={(e) => {
					e.stopPropagation();
				    e.nativeEvent.stopImmediatePropagation();
					action(2, e);}
					 }>2
				</div>								
				<div className="numItem" onClick={(e) => {
					e.stopPropagation();
				    e.nativeEvent.stopImmediatePropagation();
					action(3, e);}
					 }>3
				</div>								
				<div className="numItem" onClick={(e) => {
					e.stopPropagation();
				    e.nativeEvent.stopImmediatePropagation();
					action(4, e);}
					 }>4
				</div>								
				<div className="numItem" onClick={(e) => {
					e.stopPropagation();
				    e.nativeEvent.stopImmediatePropagation();
					action(5, e);}
					 }>5
				</div>								
				<div className="numItem" onClick={(e) => {
					e.stopPropagation();
				    e.nativeEvent.stopImmediatePropagation();
					action(null, e);}
					 }>X
				</div>								
			</div>
		</div>
		);
	}
};

export default PuzzleNode;
