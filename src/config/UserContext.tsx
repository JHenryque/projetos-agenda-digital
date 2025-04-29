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
      // localStorage.setItem(
      //   "lembretes",
      //   JSON.stringify([...state.lembretes, action.payload])
      // );
      return { ...state, lembretes: [...state.lembretes, action.payload] };
    case "setAgenda":
      //console.log("reducer", action.payload);
      return {
        ...state,
        agendamento: [...state.agendamento, action.payload],
      };
    case "setDeleteLembrete":
      localStorage.setItem(
        "lembretes",
        JSON.stringify(
          state.lembretes.filter((item) => item.id !== action.payload)
        )
      );
      return {
        ...state,
        lembretes: state.lembretes.filter((item) => item.id !== action.payload),
      };

    case "setDeleteAgendamento":
      console.log("id: ", action.payload);
      localStorage.setItem(
        "agendamento",
        JSON.stringify(
          state.agendamento.filter((item) => item.id !== action.payload)
        )
      );
      return {
        ...state,
        agendamento: state.agendamento.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "setEditeLembrete": {
      const id = state.lembretes
        .map((item) => item.id)
        .indexOf(action.payload.id);
      const lembretes = [...state.lembretes];
      lembretes[id] = action.payload;
      localStorage.setItem("lembretes", JSON.stringify([...lembretes]));
      return { ...state, lembretes };
    }
    case "setEditeAgendamento": {
      const id = state.agendamento
        .map((item) => item.id)
        .indexOf(action.payload.id);
      const agendamento = [...state.agendamento];
      agendamento[id] = action.payload;
      localStorage.setItem("agendamento", JSON.stringify([...agendamento]));
      return { ...state, agendamento };
    }
    default:
      throw new Error("Ação desconhecida");
  }
}
