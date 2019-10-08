import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToDo } from "../../store/Challenge35/action";

export interface CreateToDoProps {
  //   text: string;
  addToDo?: (text: string) => void;
}

export interface InternalState {
  text: string;
}

class CreateToDo extends React.Component<CreateToDoProps, InternalState> {
  constructor(props: CreateToDoProps) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: event.target.value
    });
  };

  render(): JSX.Element {
    const { text } = this.state;
    return (
      <div className="container">
        <h1>Challenge 3.5</h1>
        <div className="container shadow">
          <div className="form-inline p-3">
            <h5>Create a new To Do</h5>
            <input
              name="text"
              value={text}
              onChange={this.handleChange}
              type="text"
              className="form-control col-6 m-3"
              aria-describedby="helpId"
              placeholder="To Do text"
            ></input>

            <button
              onClick={(): void => {
                try {
                  this.props.addToDo && this.props.addToDo(text);
                  alert("New To Do created with success!!");
                } catch {
                  alert("Error!");
                }
              }}
              type="button"
              className="btn btn-outline-dark"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch: any): any =>
  bindActionCreators({ addToDo }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(CreateToDo);
