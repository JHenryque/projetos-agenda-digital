interface Lembretes {
  id: number;
  tipo: string;
  name: string | undefined;
  descricao: string | undefined;
  date: string | undefined; // formato: dd/mm/aaaa
}

// a interface agendamento data descreve a forma para o state da (data, AgendaState, AgendaAction)

interface Agendamento {
  id: number;
  tipo: string;
  name: string | undefined;
  telefone: string | undefined;
  endereco: string | undefined;
  numero: string | undefined;
  cidade: string | undefined;
  barrio: string | undefined;
  data_agendado: string | undefined; // formato: dd/mm/aaaa
  horario: string | undefined; // formato: HH:MM - HH:MM
  observacao: string | undefined;
}

// a interface agendamento data descreve a forma para o state da (data, AgendaState, AgendaAction)

type Status = "idle" | "fetching" | "ready" | "error";
// a type Status informa um tipo para o state inicial assim como o tipo usado pelo useReducer (AgendaState, AgendaAction)

export interface AgendaState {
  status: Status;
  lembretes: Lembretes[];
  agendamento: Agendamento[];
}
// a interface agendaState sera descreve a forma do state do reducer (status, initialState, AgendaUserContext, AgendaReducer)

export const initialState: AgendaState = {
  status: "idle",
  lembretes: localStorage.getItem("lembretes")
    ? JSON.parse(localStorage.getItem("lembretes")!)
    : [], // adicionar um lembrete vazio para nao dar erro
  agendamento: localStorage.getItem("agendamento")
    ? JSON.parse(localStorage.getItem("agendamento")!)
    : [],
};
// a interface initialState sera informa um tipo para o state inicial assim como o tipo usado pelo useReducer (StateContext, UserContext)

export type AgendaAction =
  | { type: "setStatus"; payload: Status }
  | { type: "setLembrete"; payload: Lembretes }
  | { type: "setAgenda"; payload: Agendamento }
  | { type: "setDeleteLembrete"; payload: Lembretes["id" | "tipo"] }
  | { type: "setDeleteAgendamento"; payload: Agendamento["id" | "tipo"] }
  | { type: "setEditeLembrete"; payload: Lembretes }
  | { type: "setEditeAgendamento"; payload: Agendamento };

// a type AgendaAction descreve as diferentes actions das quais podem ser executadas no reducer (AgendaUserContext, AgendaReducer)

export interface AgendaUserContext {
  state: AgendaState;
  dispatch: React.Dispatch<AgendaAction>;
}
// a interface AgendaUserContext descreve a forma do state do (StateContext)
