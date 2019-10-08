import { Actions } from "./types";

export interface ToDo {
  text: string;
  todo_state: boolean;
  todo_id: number;
}

// interface initiaLStateInteface {
//   toDos: ToDo[];
// }

// const INITIAL_STATE: initiaLStateInteface = {
//   toDos: []
// };

const INITIAL_STATE: {
  toDos: ToDo[];
} = {
  toDos: []
};

export default function challenge35Reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Actions.ADD_TODO: {
      // throw {};
      return {
        toDos: [
          ...state.toDos,
          {
            text: action.payload.text,
            todo_state: false,
            todo_id: Math.floor(Math.random() * 1000)
          }
        ]
      };
    }
    case Actions.EDIT_TODO: {
      let idSelected = action.payload.todo_id;
      let toDosCopy: ToDo[] = [...state.toDos];

      toDosCopy.forEach((toDo: ToDo) => {
        if (idSelected === toDo.todo_id) {
          toDo.todo_state = !toDo.todo_state;
        }
        return toDo;
      });
      return {
        toDos: toDosCopy
      };
    }
    case Actions.DELETE_TODO: {
      let idSelected = action.payload.todo_id;
      let toDosCopy: ToDo[] = [...state.toDos];
      let filteredToDos: ToDo | any = toDosCopy.filter(
        todo => todo.todo_id !== idSelected
      );
      console.log(filteredToDos);

      return { toDos: filteredToDos };
    }
    default:
      return state;
  }
}
