import React from "react";
import { connect } from "react-redux";
import { ToDo } from "../../store/Challenge35/reducer";
import { Table } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { editToDo, deleteToDo } from "../../store/Challenge35/action";

export interface Challenge35Props {
  toDos: ToDo[];
  editToDo?: (todo_id: number) => void;
  deleteToDo?: (todo_id: number) => void;
  // text: string;
  // addToDo?: (text: string) => void;
}

export interface InternalState {
  // text: string;
}

class Challenge35 extends React.Component<Challenge35Props, InternalState> {
  constructor(props: Challenge35Props) {
    super(props);
    this.state = {
      // text: ""
    };
  }

  public render(): JSX.Element {
    const { toDos, editToDo, deleteToDo } = this.props;
    return (
      <div className="container">
        <h1>Challenge 3.5</h1>
        {toDos.length ? (
          <div className="container shadow mt-5">
            <h4>List of To Do's</h4>
            <Table style={{ marginTop: "50px" }} striped bordered hover>
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">State</th>
                  <th scope="col">Text</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>

              <tbody>
                {toDos &&
                  toDos.map((todo: ToDo) => (
                    <tr key={todo.todo_id}>
                      <td>{todo.todo_id}</td>
                      <td>{todo.todo_state ? "Done" : "To Do"}</td>
                      <td>{todo.text}</td>

                      <td>
                        <button
                          onClick={(): void => {
                            try {
                              editToDo && editToDo(todo.todo_id);
                            } catch {
                              alert("Error!");
                            }
                          }}
                          className="btn btn-dark col-3 ml-5"
                        >
                          Change State
                        </button>

                        <button
                          onClick={(): void => {
                            if (todo.todo_state === true) {
                              deleteToDo && deleteToDo(todo.todo_id);
                            } else {
                              alert("Complete this To Do before deleting it!");
                            }
                          }}
                          className="btn btn-danger col-2 ml-5"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <h5 className="mt-5">
            There are no To Do's to show at the moment...
          </h5>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state?: any) => ({
  toDos: state.challenge35Reducer.toDos
});

const mapDispatchToProps = (dispatch: any): any =>
  bindActionCreators({ editToDo, deleteToDo }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Challenge35);
