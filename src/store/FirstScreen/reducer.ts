import { Actions } from "./types";

/** set initial state of first screen store */
const INITIAL_STATE = { value: "React + TS + Redux" };

/** the reducer of the first screen store */
export default function(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Actions.VALUE_CHANGED: {
      console.log("First Screen Reducer >> VALUE_CHANGED >> ", action.payload);
      return { value: action.payload };
    }
    case Actions.VALUE_DELETED: {
      console.log("First Screen Reducer >> VALUE_DELETED");
      return { value: "" };
    }
    default:
      return state;
  }
}
