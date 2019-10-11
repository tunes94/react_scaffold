import { Actions } from "./types";
import { action } from "typesafe-actions";

export const genericAlert = (text: string, type: string) => {
  return action(Actions.GENERIC_ALERT, { text, type });
};

export const removeAlerts = () => {
  return action(Actions.REMOVE_ALERTS);
};

export const removeSpecificAlert = (id: number) => {
  return action(Actions.REMOVE_SPECIFIC_ALERT, { id });
};
