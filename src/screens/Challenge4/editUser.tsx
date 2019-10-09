import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { editUser } from "../../store/Challenge4/action";
import { User } from "../../store/Challenge4/reducer";

export interface EditUserProps {
  match?: any;
  history: any;
  users: User[];
  editUser?: (
    user_name: string,
    address: string,
    age: number,
    user_id: number
  ) => void;
}

export interface InternalState {
  user_name: string;
  address: string;
  age: number;
  user_id: number;
}

class EditUser extends React.Component<EditUserProps, InternalState> {
  constructor(props: EditUserProps) {
    super(props);
    this.state = {
      user_name: "",
      address: "",
      age: 0,
      user_id: 0
    };
  }

  componentDidMount() {
    const { users } = this.props;
    const idSelected: number = parseInt(this.props.match.params.user_id);
    let usersCopy = [...users];

    let filteredUser: User | any = usersCopy.find(
      user => user.user_id === idSelected
    );

    if (filteredUser) {
      this.setState({
        user_name: filteredUser.user_name,
        address: filteredUser.address,
        age: filteredUser.age,
        user_id: idSelected
      });
    }
  }

  handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      ...this.state,
      [evt.target.name]: evt.target.value
    });
  };

  render(): JSX.Element {
    const { user_name, address, age, user_id } = this.state;
    const { editUser, history } = this.props;
    return (
      <div className="container shadow">
        <h3 className="m-3">Edit this user:</h3>
        <div className="form-group">
          <div className="row border p-2 shadow">
            <label className="col-3 m-3">User name:</label>
            <input
              name="user_name"
              value={user_name}
              onChange={this.handleChange}
              type="text"
              className="form-control col-7 m-3"
              aria-describedby="helpId"
              placeholder="User Name"
            ></input>

            <label className="col-3 m-3">User address:</label>
            <input
              name="address"
              value={address}
              onChange={this.handleChange}
              type="text"
              className="form-control col-7 m-3"
              aria-describedby="helpId"
              placeholder="User Address"
            ></input>
            <label className="col-3 m-3">User age:</label>
            <input
              name="age"
              value={age}
              onChange={this.handleChange}
              type="number"
              className="form-control col-7 m-3"
              aria-describedby="helpId"
              placeholder="User Age"
            ></input>

            <button
              onClick={(): void => {
                try {
                  editUser &&
                    editUser(
                      user_name as string,
                      address as string,
                      age as number,
                      user_id as number
                    );
                  history.goBack();
                } catch {
                  alert("Error!");
                }
              }}
              type="button"
              className="btn btn-outline-dark col-2 ml-5 mb-2"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state?: any): { users: User[] } => ({
  users: state.challenge4Reducer.users
});

const mapDispatchToProps = (dispatch: any): any =>
  bindActionCreators({ editUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser);
