import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { editUser } from "../../store/Challenge4/action";
import { User } from "../../store/Challenge4/reducer";

export interface EditUserProps {
  match?: any;
  history: any;
  users: User[];
}

export interface InternalState {
  user_name: string;
  address: string;
  age: number;
}

class EditUser extends React.Component<EditUserProps, InternalState> {
  constructor(props: EditUserProps) {
    super(props);
    this.state = {
      user_name: "",
      address: "",
      age: 0
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
        age: filteredUser.age
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
    const { user_name, address, age } = this.state;
    return (
      <div className="container shadow">
        <div className="form-group p-3">
          <h3 className="m-3">Edit this user:</h3>

          <input
            name="user_name"
            value={user_name}
            onChange={this.handleChange}
            type="text"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Name"
          ></input>

          <input
            name="address"
            value={address}
            onChange={this.handleChange}
            type="text"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Address"
          ></input>

          <input
            name="age"
            value={age}
            onChange={this.handleChange}
            type="number"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Age"
          ></input>

          <button
            //   onClick={this.editUser}
            className="btn btn-outline-primary ml-3 mt-1 "
          >
            Edit
          </button>
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
