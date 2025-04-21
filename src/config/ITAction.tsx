interface Lembretes {
  id: number;
  nome: string;
  descricao: string;
  data: string; // formato: dd/mm/aaaa
}

const lembretes: Lembretes[] = [
  {
    id: 1,
    nome: "DoAula de react",
    descricao: "Aula de react",
    data: "15/04/2025",
  },
];
// a interface agendamento data descreve a forma para o state da (data, AgendaState, AgendaAction)

interface Agendamento {
  id: number;
  nome: string;
  telefone: string;
  endereco: string;
  numero: string;
  cidade: string;
  barrio: string;
  data_agendado: string; // formato: dd/mm/aaaa
  horario: string; // formato: HH:MM - HH:MM
  observacao: string;
}

const data: Agendamento[] = [
  {
    id: 1,
    nome: "Do cliente",
    telefone: "(99) 99999-9999",
    endereco: "Rua Professor Fernando Souto",
    numero: "205",
    cidade: "Garanhuns",
    barrio: "Boa Vista",
    data_agendado: "15/04/2025",
    horario: "08:00 - 10:00",
    observacao: "Sem observação",
  },
];
// a interface agendamento data descreve a forma para o state da (data, AgendaState, AgendaAction)

type Status = "idle" | "fetching" | "ready" | "error";
// a type Status informa um tipo para o state inicial assim como o tipo usado pelo useReducer (AgendaState, AgendaAction)

export interface AgendaState {
  status: Status;
  array: Agendamento[];
  lembretes: Lembretes[];
}
// a interface agendaState sera descreve a forma do state do reducer (status, initialState, AgendaUserContext, AgendaReducer)

export const initialState: AgendaState = {
  status: "idle",
  array: data,
  lembretes: lembretes,
};
// a interface initialState sera informa um tipo para o state inicial assim como o tipo usado pelo useReducer (StateContext, UserContext)

export type AgendaAction =
  | { type: "setStatus"; payload: Status }
  | { type: "setLembrete"; payload: Lembretes };

// a type AgendaAction descreve as diferentes actions das quais podem ser executadas no reducer (AgendaUserContext, AgendaReducer)

export interface AgendaUserContext {
  state: AgendaState;
  dispatch: React.Dispatch<AgendaAction>;
}
// a interface AgendaUserContext descreve a forma do state do (StateContext)
