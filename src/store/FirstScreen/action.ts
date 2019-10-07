import { action, EmptyAction } from "typesafe-actions";
import { Actions } from "./types";

/** define action to change value in the store */
export const changeValue = (newValue: string | ""): EmptyAction<string> =>
  action(Actions.VALUE_CHANGED, newValue);
/** define action to clear the value in the store */
export const deleteValue = (): EmptyAction<string> =>
  action(Actions.VALUE_DELETED);
