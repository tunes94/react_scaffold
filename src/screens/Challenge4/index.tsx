import React from "react";
import { User } from "../../store/Challenge4/reducer";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

export interface Challenge4Props {
  history?: any;
  users: User[];
  editUser?: (
    user_name: string,
    address: string,
    age: number,
    user_id: number
  ) => void;
  // deleUser?: (user_id: number) => void;
}

export interface InternalState {}

class Challenge4 extends React.Component<Challenge4Props, InternalState> {
  constructor(props: Challenge4Props) {
    super(props);
    this.state = {};
  }

  public render(): JSX.Element {
    const { users, editUser } = this.props;
    return (
      <div className="container">
        <h1>Challenge 4</h1>
        {users.length ? (
          <div className="container shadow mt-5">
            <h4>List of Users</h4>
            <Table style={{ marginTop: "50px" }} striped bordered hover>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Age</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>

              <tbody>
                {users &&
                  users.map((user: User) => (
                    <tr key={user.user_id}>
                      <td>{user.user_name}</td>
                      <td>{user.address}</td>
                      <td>{user.age}</td>

                      <td>
                        <Link
                          to={{
                            pathname: "/challenge4/users/edit",
                            state: {
                              user: user
                            }
                          }}
                          className="btn btn-dark"
                        >
                          Edit
                        </Link>

                        {/* <button
                          // onClick={() =>
                          //   this.props.history.push(
                          //     `/challenge4/${user.user_id}/edit`
                          //   )
                          // }
                          // onClick={(): void => {
                          //   try {
                          //     editUser && editUser(user.user_name, user.user.user_id);
                          //   } catch {
                          //     alert("Error!");
                          //   }
                          // }}
                          className="btn btn-dark col-3 ml-5"
                        >
                          Edit
                        </button> */}

                        <button
                          // onClick={(): void => {
                          //   if (todo.todo_state === true) {
                          //     deleteToDo && deleteToDo(todo.todo_id);
                          //   } else {
                          //     alert("Complete this To Do before deleting it!");
                          //   }
                          // }}
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
          <h5 className="mt-5">There are no users show at the moment...</h5>
        )}
      </div>
    );
  }
}
// state?
const mapStateToProps = (state: any) => ({
  users: state.challenge4Reducer.users
});

// const mapDispatchToProps = (dispatch: any): any =>
//   bindActionCreators({ editToDo, deleteToDo }, dispatch);

export default connect(
  mapStateToProps,
  null
)(Challenge4);
