import React from "react";
import { User } from "../../store/Challenge4/users/reducer";
import { deleteUser, editUser } from "../../store/Challenge4/users/action";
import {
  genericAlert,
  removeAlerts
} from "../../store/Challenge4/alerts/action";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import { bindActionCreators } from "redux";
import showAlert from "./hoc/hocAlert";

export interface Challenge4Props {
  history?: any;
  users: User[];
  deleteUser?: (user_id: number) => void;
  genericAlert?: (text: string, type: string) => void;
  removeAlerts?: () => void;
}

export interface InternalState {}

class Challenge4 extends React.Component<Challenge4Props, InternalState> {
  constructor(props: Challenge4Props) {
    super(props);
    this.state = {};
  }

  public render(): JSX.Element {
    const { users, deleteUser, genericAlert, removeAlerts } = this.props;
    return (
      <div className="container">
        <h1>Challenge 4</h1>
        <button
          className="btn btn-outline-dark col-3"
          onClick={(): void => {
            removeAlerts && removeAlerts();
          }}
        >
          Clear all alerts
        </button>
        {users.length ? (
          <div className="container shadow mt-5 p-3">
            <h4>List of Users</h4>

            <Table
              style={{ marginTop: "50px" }}
              className="striped bordered hover "
            >
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
                        <button
                          onClick={() =>
                            this.props.history.push(
                              `/challenge4/user/${user.user_id}/edit`
                            )
                          }
                          className="btn btn-dark col-3 ml-5"
                        >
                          Edit
                        </button>

                        <button
                          onClick={(): void => {
                            try {
                              deleteUser && deleteUser(user.user_id);
                              genericAlert &&
                                genericAlert(
                                  "User deleted with success.",
                                  "success"
                                );
                            } catch {
                              genericAlert &&
                                genericAlert(
                                  "Something went wrong...",
                                  "danger"
                                );
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
          <h5 className="mt-5">There are no users to show at the moment...</h5>
        )}
      </div>
    );
  }
}
// state?
const mapStateToProps = (state: any): { users: User[] } => ({
  users: state.challenge4Reducer.users
});

const mapDispatchToProps = (dispatch: any): any =>
  bindActionCreators(
    { deleteUser, editUser, genericAlert, removeAlerts },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(showAlert(Challenge4));
