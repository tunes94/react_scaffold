import * as React from "react";
import { number, string } from "prop-types";
import { Actions } from "./types";
import { action, EmptyAction } from "typesafe-actions";

export const addToDo = (text: string): EmptyAction<string> => {
  return action(Actions.ADD_TODO, { text });
};

// export function addToDo(text: string): any {
//   return {
//     type: Actions.ADD_TODO,
//     payload: {
//       text
//     }
//   };
// }
