import axios from "axios";

export default {
  // Gets all books
  getPuzzles: function() {
    return axios.get("/api/puzzles");
  },
  // Gets the book with the given id
  getPuzzle: function(id) {
    console.log("/api/puzzles/id");
    return axios.get("/api/puzzles/" + id);
  }
};
