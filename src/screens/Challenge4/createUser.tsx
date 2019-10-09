import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addUser } from "../../store/Challenge4/users/action";

export interface CreateUserProps {
  addUser?: (user_name: string, address: string, age: number) => void;
}

export interface InternalState {
  user_name: string;
  address: string;
  age: number;
}

class CreateUser extends React.Component<CreateUserProps, InternalState> {
  constructor(props: CreateUserProps) {
    super(props);
    this.state = {
      user_name: "",
      address: "",
      age: 0
    };
  }

  handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      ...this.state,
      [evt.target.name]: evt.target.value
    });
  };

  render(): JSX.Element {
    const handleChange = this.handleChange;
    const { user_name, address, age } = this.state;
    return (
      <div className="container shadow">
        <h3 className="m-3">Add a new user!</h3>
        <div className="form-group ">
          <div className="row border p-2 shadow">
            <label className="col-2 ml-2 mt-3 mb-3 mr-1">User name:</label>
            <input
              name="user_name"
              value={user_name}
              onChange={handleChange}
              type="text"
              className="form-control col-9 m-3 "
              aria-describedby="helpId"
              placeholder="Type some text"
            ></input>

            <label className="col-2 ml-2 mt-3 mb-3 mr-1">Address:</label>
            <input
              name="address"
              value={address}
              onChange={handleChange}
              type="text"
              className="form-control col-9 m-3 "
              aria-describedby="helpId"
              placeholder="Type some text"
            ></input>

            <label className="col-2 ml-2 mt-3 mb-3 mr-1">User name:</label>
            <input
              name="age"
              value={age}
              onChange={handleChange}
              type="number"
              className="form-control col-9 m-3"
              aria-describedby="helpId"
              placeholder="User Age"
            ></input>

            <button
              onClick={(): void => {
                try {
                  this.props.addUser &&
                    this.props.addUser(user_name, address, age);
                  alert("New user created with success!!");
                } catch {
                  alert("Error!");
                }
              }}
              type="button"
              className="btn btn-outline-dark mb-3 ml-5 col-1"
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
  bindActionCreators({ addUser }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(CreateUser);
