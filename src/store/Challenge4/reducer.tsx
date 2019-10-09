import { Actions } from "./types";

export interface User {
  user_name: string;
  address: string;
  age: number;
  user_id: number;
}

interface initiaLStateInteface {
  users: User[];
}

const INITIAL_STATE: initiaLStateInteface = {
  users: []
};

export default function challenge4Reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Actions.ADD_USER: {
      return {
        users: [
          ...state.users,
          {
            user_name: action.payload.user_name,
            address: action.payload.address,
            age: action.payload.age,
            user_id: Math.floor(Math.random() * 1000)
          }
        ]
      };
    }
    case Actions.EDIT_USER: {
      let idSelected = action.payload.user_id;
      let newName = action.payload.user_name;
      let newAddress = action.payload.address;
      let newAge = action.payload.age;

      let usersCopy: User[] = [...state.users];

      usersCopy.forEach((user: User) => {
        if (idSelected === user.user_id) {
          user.user_name = newName;
          user.address = newAddress;
          user.age = newAge;
        }
        return user;
      });
      return {
        ...state,
        users: usersCopy
      };
    }
    case Actions.DELETE_USER: {
      let userSelected = action.payload.user_id;
      let usersCopy: User[] = [...state.users];
      let filteredUsers: User | any = usersCopy.filter(
        user => user.user_id !== userSelected
      );
      return { users: filteredUsers };
    }
    case Actions.GET_USERS: {
      return Object.assign({}, state);
    }

    default:
      return state;
  }
}
