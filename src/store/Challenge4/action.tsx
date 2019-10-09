import { Actions } from "./types";
import { action } from "typesafe-actions";

export const addUser = (user_name: string, address: string, age: number) => {
  return action(Actions.ADD_USER, { user_name, address, age });
};

export const editUser = (
  user_name: string,
  address: string,
  age: number,
  user_id: number
) => {
  return action(Actions.EDIT_USER, { user_name, address, age, user_id });
};

// export const editUser44 = (user: User) => {
//   return action(Actions.EDIT_USER, { user });
// };

export const deleteUser = (user_id: number) => {
  return action(Actions.DELETE_USER, { user_id });
};
