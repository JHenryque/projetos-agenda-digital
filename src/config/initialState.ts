import { AgendaState } from "./ITAction";

// a interface agendaState sera descreve a forma do state do reducer (status, initialState, AgendaUserContext, AgendaReducer)
export const initialState: AgendaState[] = {
  lembretes: [{ id: 0, name: "", descricao: "", date: "" }], // adicionar um lembrete vazio para nao dar erro
  agendamentos: {
    id: 0,
    nome: "",
    telefone: "",
    endereco: "",
    numero: "",
    cidade: "",
    barrio: "",
    data_agendado: "",
    horario: "",
    observacao: "",
  },
};
