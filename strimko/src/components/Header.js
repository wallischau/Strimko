import React, {Component} from "react";
import "../style/style.css";

class Header extends Component {
	render() {
		return (
			<div>
				<h1 className="strimko-title"> Strimko game </h1>
				<h2> Challenge your logic skills </h2>
				<p> Instruction: Fill each spot with number 1 - 5 in order to meet the rule: 
				Each row, column and stream should have only one of each number. </p>
			</div>

			);//return
	}//render
}//class

export default Header;