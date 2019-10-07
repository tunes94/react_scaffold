import * as React from "react";
import { Actions } from "./types";

export interface ToDo {
  text: string;
  state: boolean;
  id: number;
}

interface initiaLValueInteface {
  toDos: ToDo[];
}

const INITIAL_STATE: initiaLValueInteface = {
  toDos: []
};

export default function Challenge35(state = INITIAL_STATE, action: any): any {
  switch (action.type) {
    case Actions.ADD_TODO: {
      console.log("aqui");
      alert("Created wity ");
      return {
        todos: [
          ...state.toDos,
          {
            text: action.payload.text,
            state: false,
            id: Math.floor(Math.random() * 1000)
          }
        ]
      };
    }
    default:
      return state;
  }
}
