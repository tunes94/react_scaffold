import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { editUser } from "../../store/Challenge4/action";
import { User } from "../../store/Challenge4/reducer";

export interface EditUserProps {
  match?: any;
  history: any;
  editUser?: (user_name: string, address: string, age: number) => void;
  users?: User[] | any;
}

export interface InternalState {
  user_name: string;
  address: string;
  age: number;
  users: User[];
}

class EditUser extends React.Component<EditUserProps, InternalState> {
  constructor(props: EditUserProps) {
    super(props);
    this.state = {
      user_name: "",
      address: "",
      age: 0,
      users: []
    };
  }

  

  componentDidMount() {
    // const userSelected: number = this.props.match.params.user_id;
    // const { users } = this.props;
    // let usersCopy = [...this.props.users];
    // let filteredUser: User = usersCopy.find(
    //   user => user.user_id === userSelected
    // );
    // this.setState({
    //   user_name: filteredUser.user_name,
    //   address: filteredUser.address,
    //   age: filteredUser.age,
    //   users: usersCopy
    // });
  }

  render(): JSX.Element {
    const { user_name, address, age } = this.state;
    return (
      <div className="container shadow">
        <div className="form-group p-3">
          <h3 className="m-3">Edit a user!</h3>

          <input
            name="user_name"
            value={user_name}
            //   onChange={this.handleChange}
            type="text"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Name"
          ></input>

          <input
            name="address"
            value={address}
            //   onChange={this.handleChange}
            type="text"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Address"
          ></input>

          <input
            name="age"
            value={age}
            //   onChange={this.handleChange}
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

const mapStateToProps = (state?: any) => ({
  users: state.challenge4Reducer.users
});

const mapDispatchToProps = (dispatch: any): any =>
  bindActionCreators({ editUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser);
