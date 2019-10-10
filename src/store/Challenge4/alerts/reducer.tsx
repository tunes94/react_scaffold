import { Actions } from "./types";

export interface Alert {
  id: number;
  text: string;
  type: string;
}

interface initiaLStateInteface {
  alerts: Alert[];
}

const INITIAL_STATE: initiaLStateInteface = {
  alerts: []
};

export default function alertsReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Actions.GENERIC_ALERT: {
      const text: string = action.payload.text;
      const type: string = action.payload.type;
      return {
        alerts: [
          {
            text: text,
            type: type,
            id: Math.floor(Math.random() * 100)
          }
        ]
      };
    }
    case Actions.REMOVE_ALERTS: {
      return { alerts: [] };
    }
    default:
      return state;
  }
}
