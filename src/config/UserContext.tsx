import { createContext, useContext, useReducer } from "react";
import {
  AgendaAction,
  AgendaState,
  AgendaUserContext,
  initialState,
} from "./ITAction.ts";

const StateContext = createContext<AgendaUserContext>({
  state: initialState,
  dispatch: () => {},
});

export function UserProvider({ children }: { children: React.ReactElement }) {
  const [state, dispatch] = useReducer(AgendaReducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

export const UserContext = () => useContext(StateContext);

function AgendaReducer(state: AgendaState, action: AgendaAction): AgendaState {
  switch (action.type) {
    case "setStatus":
      return { ...state, status: action.payload };
    case "setLembrete":
      //console.log("reducer", action.payload);
      return {
        ...state,
        lembretes: [...state.lembretes, action.payload],
      };
    case "setAgenda":
      //console.log("reducer", action.payload);
      return {
        ...state,
        agendamento: [...state.agendamento, action.payload],
      };
    case "setDeleteLembrete":
      console.log("id: ", action.payload);
      return {
        ...state,
        lembretes: state.lembretes.filter((item) => item.id !== action.payload),
      };
    case "setDeleteAgendamento":
      console.log("id: ", action.payload);
      return {
        ...state,
        agendamento: state.agendamento.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      throw new Error("Ação desconhecida");
  }
}
