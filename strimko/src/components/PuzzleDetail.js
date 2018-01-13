import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import "../style/style.css";
import PuzzleMat from "./Puzzlemat";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import PuzzleNode from "./PuzzleNode";

// let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Detail extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    let initValue = this.initValueSet();
    let initHideMenu = this.setInitHideMenu();
      this.state = {
       currentPuzzle: initValue,
       currentPuzzleId: props.currentPuzzleId,
       mat: "playmat_noline.jpg",
       hide: initHideMenu, 
       result: ""
      };

      this.toggleMenu = this.toggleMenu.bind(this);
      this.nodeHandler = this.nodeHandler.bind(this);
      this.checkResult = this.checkResult.bind(this);
  } //constructor

  toggleMenu(position) {
    console.log('this', this);
    console.log('position', position);
    let arr = this.state.hide.slice();
    arr[position] = arr[position]?false:true;
    this.setState({
      hide: arr
    });
  }

  setInitHideMenu() {
    let arr = new Array(25).fill(true);
    return (
      arr
    )
  }

  initValueSet() {
    let arr = new Array(25).fill(null);
    return ({
        "initEntries" : arr
    })
  }//initValueSet

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    this.setState({ currentPuzzleId: nextProps.currentPuzzleId },
        this.getCurrentPuzzle);
    // this.setState((state, nextProps) => ({ currentPuzzleId: nextProps.currentPuzzleId}));
  }

  getCurrentPuzzle() {
    console.log(this.state.currentPuzzleId);  
    if (this.state.currentPuzzleId) {
      console.log("getPuzzle");
      API.getPuzzle(this.state.currentPuzzleId)
       .then(res => this.setState({ currentPuzzle: res.data, mat: res.data.mat }))
        // .then(res => console.log(res))
        .catch(err => console.log(err));
    }

  }

  nodeHandler(position, value, e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log("nodeHandler");
    console.log(value);
    // console.log(e);
    let curPuz = {...this.state.currentPuzzle};
    curPuz.initEntries[position] = value;
    this.setState({curPuz});
    let arr = this.state.hide.slice();
    arr[position] = true;
    this.setState({
      hide: arr
    });
  }

  checkResult() {
    let result; 
    if (!this.state.currentPuzzleId)
      return;
    for (let i=0; i<this.state.currentPuzzle.initEntries.length; i++) {
      if (this.state.currentPuzzle.initEntries[i] !== this.state.currentPuzzle.solution[i]) {
        this.setState({ result: "Not correct"});
        console.log("not correct");
        return;
      }
    }
    console.log('correct');
    this.setState({ result: "Great job!"});
  }



  render() {
    let menu;
    let nodeHandler = this.nodeHandler;
    if(this.state.menuActive) {
      menu = <div>
              <ul>
                <li>a</li>
                <li>b</li>
              </ul>
            </div>
    }
    else {
      menu = "";
    }
    return (
    <div className="number-panel">
      <PuzzleMat mat={this.state.mat}/>
      <div className="row number-row">
        <div className="col-xs-2 offset-xs-1 text-center number-cell">
{/*          <ReactCSSTransitionGroup transitionName = "menu" 
              transitionEnterTimeout={1000} transitionLeaveTimeout={1000}> */}
{/*}          {menu} */}
{/*}          </ReactCSSTransitionGroup> */}
          <div className="node-entry" onClick={ () => this.toggleMenu(0)}>{this.state.currentPuzzle.initEntries[0]}
            <PuzzleNode hide={this.state.hide[0]} action={nodeHandler.bind(this, 0)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(1)}>{this.state.currentPuzzle.initEntries[1]}
            <PuzzleNode hide={this.state.hide[1]} action={nodeHandler.bind(this, 1)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(2)}>{this.state.currentPuzzle.initEntries[2]}
            <PuzzleNode hide={this.state.hide[2]} action={nodeHandler.bind(this, 2)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(3)}>{this.state.currentPuzzle.initEntries[3]}
            <PuzzleNode hide={this.state.hide[3]} action={nodeHandler.bind(this, 3)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(4)}>{this.state.currentPuzzle.initEntries[4]}
            <PuzzleNode hide={this.state.hide[4]} action={nodeHandler.bind(this, 4)}></PuzzleNode>
          </div>
        </div>
      </div>
      <div className="row number-row">
        <div className="col-xs-2 offset-xs-1 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(5)}>{this.state.currentPuzzle.initEntries[5]}
            <PuzzleNode hide={this.state.hide[5]} action={nodeHandler.bind(this, 5)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(6)}>{this.state.currentPuzzle.initEntries[6]}
            <PuzzleNode hide={this.state.hide[6]} action={nodeHandler.bind(this, 6)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(7)}>{this.state.currentPuzzle.initEntries[7]}
            <PuzzleNode hide={this.state.hide[7]} action={nodeHandler.bind(this, 7)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(8)}>{this.state.currentPuzzle.initEntries[8]}
            <PuzzleNode hide={this.state.hide[8]} action={nodeHandler.bind(this, 8)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(9)}>{this.state.currentPuzzle.initEntries[9]}
            <PuzzleNode hide={this.state.hide[9]} action={nodeHandler.bind(this, 9)}></PuzzleNode>
          </div>
        </div>
      </div>
      <div className="row number-row">
        <div className="col-xs-2 offset-xs-1 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(10)}>{this.state.currentPuzzle.initEntries[10]}
            <PuzzleNode hide={this.state.hide[10]} action={nodeHandler.bind(this, 10)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(11)}>{this.state.currentPuzzle.initEntries[11]}
            <PuzzleNode hide={this.state.hide[11]} action={nodeHandler.bind(this, 11)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(12)}>{this.state.currentPuzzle.initEntries[12]}
            <PuzzleNode hide={this.state.hide[12]} action={nodeHandler.bind(this, 12)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(13)}>{this.state.currentPuzzle.initEntries[13]}
            <PuzzleNode hide={this.state.hide[13]} action={nodeHandler.bind(this, 13)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(14)}>{this.state.currentPuzzle.initEntries[14]}
            <PuzzleNode hide={this.state.hide[14]} action={nodeHandler.bind(this, 14)}></PuzzleNode>
          </div>
        </div>
      </div>
      <div className="row number-row">
        <div className="col-xs-2 offset-xs-1 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(15)}>{this.state.currentPuzzle.initEntries[15]}
            <PuzzleNode hide={this.state.hide[15]} action={nodeHandler.bind(this, 15)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(16)}>{this.state.currentPuzzle.initEntries[16]}
            <PuzzleNode hide={this.state.hide[16]} action={nodeHandler.bind(this, 16)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(17)}>{this.state.currentPuzzle.initEntries[17]}
            <PuzzleNode hide={this.state.hide[17]} action={nodeHandler.bind(this, 17)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(18)}>{this.state.currentPuzzle.initEntries[18]}
            <PuzzleNode hide={this.state.hide[18]} action={nodeHandler.bind(this, 18)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(19)}>{this.state.currentPuzzle.initEntries[19]}
            <PuzzleNode hide={this.state.hide[19]} action={nodeHandler.bind(this, 19)}></PuzzleNode>
          </div>
        </div>
      </div>
      <div className="row number-row">
        <div className="col-xs-2 offset-xs-1 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(20)}>{this.state.currentPuzzle.initEntries[20]}
            <PuzzleNode hide={this.state.hide[20]} action={nodeHandler.bind(this, 20)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(21)}>{this.state.currentPuzzle.initEntries[21]}
            <PuzzleNode hide={this.state.hide[21]} action={nodeHandler.bind(this, 21)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(22)}>{this.state.currentPuzzle.initEntries[22]}
            <PuzzleNode hide={this.state.hide[22]} action={nodeHandler.bind(this, 22)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(23)}>{this.state.currentPuzzle.initEntries[23]}
            <PuzzleNode hide={this.state.hide[23]} action={nodeHandler.bind(this, 23)}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(24)}>{this.state.currentPuzzle.initEntries[24]}
            <PuzzleNode hide={this.state.hide[24]} action={nodeHandler.bind(this, 24)}></PuzzleNode>
          </div>
        </div>
      </div>
      <div>
        <button className="check-result" onClick={this.checkResult}>
          Check result
        </button>
        <label className="result">
            {this.state.result}
        </label>
      </div>

    </div>
  );//return

  }//render
}//class detail

export default Detail;
