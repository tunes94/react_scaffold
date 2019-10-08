import { Actions } from "./types";
import { action, EmptyAction } from "typesafe-actions";

export const addToDo = (text: string): EmptyAction<string> => {
  return action(Actions.ADD_TODO, { text });
};

export const editToDo = (todo_id: number) => {
  return action(Actions.EDIT_TODO, { todo_id });
};

export const deleteToDo = (todo_id: number) => {
  return action(Actions.DELETE_TODO, { todo_id });
};
