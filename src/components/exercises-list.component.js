import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = {
      exercises: [],
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/exercises/")
      .then(response => {
        this.setState({
          exercises: response.data,
        })
      })
      .catch(err => console.log(err));
  }

  deleteExercise(id) {
    axios.delete("http://localhost:5000/exercises/" + id)
      .then(res => console.log(res.data));
      this.setState({
        exercises: this.state.exercises.filter(el => el.id !== id)
      })
  }

  render() {
    return (
      <div>
        <p>your in exerciseList</p>
      </div>
    );
  }
}
