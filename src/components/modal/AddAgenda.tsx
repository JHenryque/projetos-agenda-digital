/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import style from "./modal.module.css";
import { UserContext } from "../../config/UserContext";
//import { useNavigate } from "react-router";

export default function AddAgenda() {
  const { state, dispatch } = UserContext();
  const [errors, setErrors] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const [name, setName] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [barrio, setBarrio] = useState("");
  const [data_agendado, setData_agendado] = useState("");
  const [horario, setHorario] = useState("");
  const [observacao, setObservacao] = useState("");
  //const navigate = useNavigate();

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const id =
      state.agendamento.length > 0
        ? Math.max(...state.agendamento.map((todo) => todo.id)) + 1
        : 1;
    if (
      !name ||
      !telefone ||
      !endereco ||
      !numero ||
      !cidade ||
      !barrio ||
      data_agendado == ""
    ) {
      setErrors("*Preencha todos os campos!");
      return;
    } else {
      const newAgenda = {
        id,
        tipo: "Agendamento",
        name,
        telefone,
        endereco,
        numero,
        cidade,
        barrio,
        data_agendado,
        horario,
        observacao,
      };
      dispatch({ type: "setAgenda", payload: newAgenda });

      setErrors("");
      setSuccess("Agendamento feito com sucesso!");
      setName("");
      setTelefone("");
      setEndereco("");
      setNumero("");
      setCidade("");
      setBarrio("");
      setData_agendado("");
      setHorario("");
      setObservacao("");
      setTimeout(() => {
        setSuccess("");
      }, 3000);
    }
  };

  return (
    <div className={style.modal}>
      <form action="#" className={style.form_} onSubmit={handleOnSubmit}>
        <h2>Formulario de Agenda</h2>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          name="name"
          placeholder="Digite o Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="text"
          name="telefone"
          placeholder="Digite o Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <label htmlFor="endereco">Endereço:</label>
        <input
          type="text"
          name="endereco"
          placeholder="Digite o Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <label htmlFor="numero">N°:</label>
        <input
          type="text"
          name="numero"
          placeholder="Digite o Numero da casa"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <label htmlFor="cidade">Cidade:</label>
        <input
          type="text"
          name="cidade"
          placeholder="Digite a Cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <label htmlFor="barrio">Barrio:</label>
        <input
          type="text"
          name="barrio"
          placeholder="Digite o Barrio"
          value={barrio}
          onChange={(e) => setBarrio(e.target.value)}
        />
        <label htmlFor="data-agendada">Data Marcada:</label>
        <input
          type="date"
          name="data_agendado"
          placeholder="Digite a Data Agendada"
          value={data_agendado}
          onChange={(e) => setData_agendado(e.target.value)}
        />
        <label htmlFor="hora">Hora Marcada:</label>
        <input
          type="time"
          name="horario"
          placeholder="Digite a Hora Marcada"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
        />
        <label htmlFor="observacao">Observação:</label>
        <textarea
          name="observacao"
          placeholder="Digite a o Observação"
          value={observacao}
          onChange={(e) => setObservacao(e.target.value)}
        ></textarea>
        {errors && <p className={style.errors}>{errors}</p>}
        {success && <p className={style.success}>{success}</p>}
        <button>Salvar</button>
      </form>
    </div>
  );
}
