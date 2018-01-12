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
       menuActive: false
      };

      this.toggleMenu = this.toggleMenu.bind(this);
  } //constructor

  toggleMenu(position) {
    // let menuState = !this.state.menuActive;
    console.log('this', this);
    console.log('position', position);
    let arr = this.state.hide.slice();
    arr[position] = false;
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


  render() {
    let menu;
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
            <PuzzleNode hide={this.state.hide[0]}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ () => this.toggleMenu(1)}>{this.state.currentPuzzle.initEntries[1]}
            <PuzzleNode hide={this.state.hide[1]}></PuzzleNode>
          </div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ this.toggleMenu}>{this.state.currentPuzzle.initEntries[2]}{menu}</div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ this.toggleMenu}>{this.state.currentPuzzle.initEntries[3]}{menu}</div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry" onClick={ this.toggleMenu}>{this.state.currentPuzzle.initEntries[4]}{menu}</div>
        </div>
      </div>
      <div className="row number-row">
        <div className="col-xs-2 offset-xs-1 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[5]}</div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[6]}</div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[7]}</div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[8]}</div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[9]}</div>
        </div>
      </div>
      <div className="row number-row">
        <div className="col-xs-2 offset-xs-1 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[10]}</div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[11]}</div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[12]}</div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[13]}</div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[14]}</div>
        </div>
      </div>
      <div className="row number-row">
        <div className="col-xs-2 offset-xs-1 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[15]}</div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[16]}</div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[17]}</div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[18]}</div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[19]}</div>
        </div>
      </div>
      <div className="row number-row">
        <div className="col-xs-2 offset-xs-1 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[20]}</div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[21]}</div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[22]}</div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[23]}</div>
        </div>
        <div className="col-xs-2 text-center number-cell">
          <div className="node-entry">{this.state.currentPuzzle.initEntries[24]}</div>
        </div>
      </div>

    </div>
  );//return

  }//render
}//class detail

export default Detail;
