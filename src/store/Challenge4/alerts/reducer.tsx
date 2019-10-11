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
          ...state.alerts,
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
    case Actions.REMOVE_SPECIFIC_ALERT: {
      let idSelected = action.payload.id;
      let alertsCopy: Alert[] = [...state.alerts];
      let filteredAlert: Alert | any = alertsCopy.filter(
        alert => alert.id !== idSelected
      );
      console.log(...state.alerts);

      return { alerts: filteredAlert };
    }
    default:
      return state;
  }
}
