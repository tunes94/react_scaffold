import { Actions } from "./types";

export interface Alert {
  text: string;
  type: string;
}

interface initiaLStateInteface {
  alerts: Alert[];
}

const INITIAL_STATE: initiaLStateInteface = {
  alerts: []
};

export default function challenge4Reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Actions.ADD_ALERT: {
      const text: string = action.payload.text;
      const type: string = action.payload.type;

      return {
        alerts: [
          ...state.alerts,
          {
            text: text,
            type: type
          }
        ]
      };
    }

    case Actions.REMOVE_ALERT: {
      return {
        alerts: []
      };
    }
    default:
      return state;
  }
}
