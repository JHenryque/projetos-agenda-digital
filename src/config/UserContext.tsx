import { createContext, useContext, useReducer } from "react";
import {
  AgendaState,
  AgendaAction,
  AgendaUserContext,
  initialState,
} from "./ITAction.tsx";

const StateContext = createContext<AgendaUserContext>({
  state: initialState,
  dispatch: () => null,
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

function AgendaReducer(state: AgendaState, action: AgendaAction) {
  switch (action.type) {
    case "setStatus":
      return { ...state, status: action.payload };
    default:
      throw new Error("Ação desconhecida");
  }
}
