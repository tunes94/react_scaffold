import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToDo } from "../../store/Challenge35/action";
import { ToDo } from "../../store/Challenge35/reducer";
import { Table } from "react-bootstrap";

export interface Challenge35Props {
  toDos?: ToDo[];
  text: string;
  addToDo?: (text: string) => void;
}

export interface InternalState {
  text: string;
}

class Challenge35 extends React.Component<Challenge35Props, InternalState> {
  constructor(props: Challenge35Props) {
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

  public render(): JSX.Element {
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
              onClick={(): void =>
                this.props.addToDo && this.props.addToDo(text)
              }
              type="button"
              className="btn btn-outline-primary"
            >
              Submit
            </button>
          </div>
        </div>

        <div className="container shadow mt-5">
          <h4>List of To Do's</h4>
          <Table style={{ marginTop: "50px" }} striped bordered hover>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">State</th>
                <th scope="col">ID</th>
                <th scope="col">Change state</th>
              </tr>
            </thead>

            {/* {this.props.toDos.length ? ( */}
            <tbody>
              {this.props.toDos &&
                this.props.toDos.map((todo: ToDo) => (
                  <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.text}</td>
                    <td>{todo.state}</td>

                    <td>
                      <button className="btn btn-danger col-4 ml-5">
                        Done
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
            {/* ) : null} */}
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any): object => ({
  todos: state.challenge35.toDos
});

const mapDispatchToProps = (dispatch: any): any =>
  bindActionCreators({ addToDo }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Challenge35);
