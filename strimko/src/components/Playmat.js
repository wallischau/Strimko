import React, {Component} from "react";
import "../style/style.css";
class Playmat extends Component {
	constructor({currentPuzzle}) {
		super({currentPuzzle});
		let initValue = this.initValueSet();
		this.state = {
			currentPuzzle: initValue
		}
	}

	initValueSet() {
		return ({
    		// "puzzleSet" : 0, "puzzleNum" : 100,
    		// "stream0" : [
    		//     {"x" : 0, "y" : 0 }, {"x" : 0, "y" : 1 }, {"x" : 0, "y" : 2 }, {"x" : 0, "y" : 3 }, {"x" : 0, "y" : 4 }
    		// ],
    		// "stream1" : [ 
    		//     {"x" : 1, "y" : 0 }, {"x" : 1, "y" : 1 }, {"x" : 1, "y" : 2 }, {"x" : 1, "y" : 3 }, {"x" : 1, "y" : 4 }
    		// ],
    		// "stream2" : [ 
    		//     {"x" : 2, "y" : 0 }, {"x" : 2, "y" : 1 }, {"x" : 2, "y" : 2 }, {"x" : 2, "y" : 3 }, {"x" : 2, "y" : 4 }
    		// ],
    		// "stream3" : [ 
    		//     {"x" : 3, "y" : 0 }, {"x" : 3, "y" : 1 }, {"x" : 3, "y" : 2 }, {"x" : 3, "y" : 3 }, {"x" : 3, "y" : 4 }
    		// ],
    		// "stream4" : [ 
    		//     {"x" : 4, "y" : 0 }, {"x" : 4, "y" : 1 }, {"x" : 4, "y" : 2 }, {"x" : 4, "y" : 3 }, {"x" : 4, "y" : 4 }
    		// ],
    		"initEntries" : [ 
    		    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 
    		],
    		"solution" : [ 
        		1, 2, 3, 4, 5, 2, 3, 4, 5, 1, 3, 4, 5, 1, 2, 4, 5, 1, 2, 3, 5, 1, 2, 3, 4
    		]
		})
	}//initValueSet

	render() {
	return (
		<div className="number-panel">
			<div className="row number-row">
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[0]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[1]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[2]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[3]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[4]}</div>
				</div>
			</div>
			<div className="row number-row">
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[5]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[6]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[7]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[8]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[9]}</div>
				</div>
			</div>
			<div className="row number-row">
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[10]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[11]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[12]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[13]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[14]}</div>
				</div>
			</div>
			<div className="row number-row">
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[15]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[16]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[17]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[18]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[19]}</div>
				</div>
			</div>
			<div className="row number-row">
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[20]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[21]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[22]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[23]}</div>
				</div>
				<div className="col-xs-2 text-center number-cell">
					<div className="circle">{this.state.currentPuzzle.initEntries[24]}</div>
				</div>
			</div>

		</div>

	);//return
	}//render
}//class

export default Playmat;