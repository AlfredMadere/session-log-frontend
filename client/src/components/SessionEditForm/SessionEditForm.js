import { Component } from "react";
import SessionData from "../SessionData/SessionData";

class SessionEditForm extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.sessionData.notes);
    this.state = {
      notes: this.props.sessionData.notes,
      logValid: "true",
      logType: "occured",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    alert(
      `notes: ${this.state.notes}... Log is correct: ${this.state.logValid}... Log Type: ${this.state.logType}`
    );
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>The below session has already been logged, edit the log below</h2>
          <h3>Session Log</h3>
          <SessionData sessionData={this.props.sessionData} />
          <label>
            Log is:
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
          </label>
          {this.state.logValid === "false" && (
            <h2>
              Please include what is wrong with the information in the notes
            </h2>
          )}
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

export default SessionEditForm;
