import { Actions } from "./types";
import { action } from "typesafe-actions";

export const addAlert = (text: string, type: string) => {
  return action(Actions.ADD_ALERT, { text, type });
};

export const removeAlert = () => {
  return action(Actions.REMOVE_ALERT);
};
