interface Lembretes {
  id: number;
  tipo: string;
  name: string;
  descricao: string;
  date: string; // formato: dd/mm/aaaa
}

// const lembrete: Lembretes[] = [
//   {
//     id: 1,
//     name: "DoAula de react",
//     descricao: "Aula de react",
//     date: "15/04/2025",
//   },
// ];
// a interface agendamento data descreve a forma para o state da (data, AgendaState, AgendaAction)

interface Agendamento {
  id: number;
  tipo: string;
  name: string;
  telefone: string;
  endereco: string;
  numero: string;
  cidade: string;
  barrio: string;
  data_agendado: string; // formato: dd/mm/aaaa
  horario: string; // formato: HH:MM - HH:MM
  observacao: string;
}

// const agenda: Agendamento[] = [
//   {
//     id: 1,
//     nome: "Do cliente",
//     telefone: "(99) 99999-9999",
//     endereco: "Rua Professor Fernando Souto",
//     numero: "205",
//     cidade: "Garanhuns",
//     barrio: "Boa Vista",
//     data_agendado: "15/04/2025",
//     horario: "08:00 - 10:00",
//     observacao: "Sem observação",
//   },
// ];

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
  lembretes: [], // adicionar um lembrete vazio para nao dar erro
  agendamento: [],
};
// a interface initialState sera informa um tipo para o state inicial assim como o tipo usado pelo useReducer (StateContext, UserContext)

export type AgendaAction =
  | { type: "setStatus"; payload: Status }
  | { type: "setLembrete"; payload: Lembretes }
  | { type: "setAgenda"; payload: Agendamento }
  | { type: "setDeleteLembrete"; payload: Lembretes["id" | "tipo"] }
  | { type: "setDeleteAgendamento"; payload: Agendamento["id" | "tipo"] };

// a type AgendaAction descreve as diferentes actions das quais podem ser executadas no reducer (AgendaUserContext, AgendaReducer)

export interface AgendaUserContext {
  state: AgendaState;
  dispatch: React.Dispatch<AgendaAction>;
}
// a interface AgendaUserContext descreve a forma do state do (StateContext)
