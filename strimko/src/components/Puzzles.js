import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import Header from "../components/Header";
// import Playmat from "../components/Playmat";
import PuzzleDetail from "../components/PuzzleDetail";
import API from "../utils/API";

class Puzzles extends Component {
  state = {
    puzzles: [],
    currentPuzzle: null,
    currentPuzzleId: null
    // num: ""
  };

  componentDidMount() {
    this.loadPuzzles();
  }

  loadPuzzles = () => {
    API.getPuzzles()
      .then(res =>
        this.setState({ puzzles: res.data, num: "" })
      )
      .catch(err => console.log(err));
  };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }(
    // };
  
  handlePuzzleClick = id => {
    this.setState({
      currentPuzzleId: id 
    });
    console.log("id=", id);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <Header />
            </Jumbotron>
{/*            <form> */}
{/*              <Input */}
{/*                value={this.state.title} */}
{/*                onChange={this.handleInputChange} */}
{/*                name="title" */}
{/*                placeholder="Title (required)" */}
{/*              /> */}
{/*              <Input */}
{/*                value={this.state.author} */}
{/*                onChange={this.handleInputChange} */}
{/*                name="author" */}
{/*                placeholder="Author (required)" */}
{/*              /> */}
{/*              <TextArea */}
{/*                value={this.state.synopsis} */}
{/*                onChange={this.handleInputChange} */}
{/*                name="synopsis" */}
{/*                placeholder="Synopsis (Optional)" */}
{/*              /> */}
{/*              <FormBtn */}
{/*                disabled={!(this.state.author && this.state.title)} */}
{/*                onClick={this.handleFormSubmit} */}
{/*              > */}
{/*                Submit Book */}
{/*              </FormBtn> */}
{/*            </form> */}
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <PuzzleDetail currentPuzzleId={this.state.currentPuzzleId}/>
          </Col>
          <Col size="md-4">
              <h3>Puzzle List</h3>
            {this.state.puzzles.length ? (
              <List>
                {this.state.puzzles.map(puzzle => (
                  <ListItem key={puzzle._id}>
                    <div to={"/puzzles/" + puzzle._id}>
                      <div onClick={() => this.handlePuzzleClick(puzzle._id)}>
                      <strong> 
                        Puzzle #{puzzle.puzzleNum}
                      </strong>
                      </div>
                    </div>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Puzzles;
