import React, { Component } from "react";
import SessionData from "../SessionData/SessionData";

class SessionLogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: "please enter some fucking notes",
      logValid: "true",
      logType: "occured",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    alert(
      `notes: ${this.state.notes}... Log is accurate: ${this.state.logValid}... Log Type: ${this.state.logType}`
    );
    event.preventDefault();
  }

  render() {
    //if the session data indicates that it has been logged already, render a "this has already been logged" component
    //should populate the notes with any stored notes, should auto fill out the check box

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Session Log</h3>
          <SessionData sessionData={this.props.sessionData} />
          <label>
            Session information is:
            <div onChange={this.handleChange}>
              <input
                type="radio"
                value="true"
                name="logValid"
                defaultChecked={this.state.logValid}
                required
              />{" "}
              Correct
              <input type="radio" value="false" name="logValid" /> Incorrect
            </div>
            {this.state.logValid === "false" && (
              <h2>
                Please include what is wrong with the information in the notes
              </h2>
            )}
          </label>
          <label>
            Log Type:
            <div onChange={this.handleChange}>
              <input
                type="radio"
                value="occured"
                name="logType"
                required
                defaultChecked
              />
              Occured as normal
              <input type="radio" value="late cancel" name="logType" /> Canceled
              with in 24hrs
              <input
                type="radio"
                value="very late cancel"
                name="logType"
              />{" "}
              Canceled with in 1hr
            </div>
          </label>
          <label>
            Notes:
            <textarea
              name="notes"
              value={this.state.notes}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h3>
          {this.props.sessionData
            ? JSON.stringify(this.props.sessionData)
            : "loading"}
        </h3>
      </div>
    );
  }
}

export default SessionLogForm;
