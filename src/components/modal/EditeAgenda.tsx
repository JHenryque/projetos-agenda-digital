/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import style from "./modal.module.css";
import { UserContext } from "../../config/UserContext";
import { useNavigate, useParams } from "react-router";

export default function EditeAgenda() {
  const [errors, setErrors] = useState<string>("");
  const { state, dispatch } = UserContext();
  const navegate = useNavigate();
  const { id } = useParams();
  const nameRef = useRef<HTMLInputElement>(null);
  const telefoneRef = useRef<HTMLInputElement>(null);
  const enderecoRef = useRef<HTMLInputElement>(null);
  const numeroRef = useRef<HTMLInputElement>(null);
  const cidadeRef = useRef<HTMLInputElement>(null);
  const barrioRef = useRef<HTMLInputElement>(null);
  const data_agendadoRef = useRef<HTMLInputElement>(null);
  const horarioRef = useRef<HTMLInputElement>(null);
  const observacaoRef = useRef<HTMLTextAreaElement>(null);

  const agendamento = state.agendamento.find((item) => item.id === Number(id));

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    const idAgenda = Number(id);
    const name = nameRef.current?.value;
    const telefone = telefoneRef.current?.value;
    const endereco = enderecoRef.current?.value;
    const numero = numeroRef.current?.value;
    const cidade = cidadeRef.current?.value;
    const barrio = barrioRef.current?.value;
    const data_agendado = data_agendadoRef.current?.value;
    const horario = horarioRef.current?.value;
    const observacao = observacaoRef.current?.value;

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
    } else {
      const newAgenda = {
        id: idAgenda,
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
      dispatch({ type: "setEditeAgendamento", payload: newAgenda });
      setErrors("");

      navegate("/");
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
          ref={nameRef}
          placeholder="Digite o Nome"
          defaultValue={agendamento?.name}
        />
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="text"
          name="telefone"
          placeholder="Digite o Telefone"
          defaultValue={agendamento?.telefone}
          ref={telefoneRef}
        />
        <label htmlFor="endereco">Endereço:</label>
        <input
          type="text"
          name="endereco"
          placeholder="Digite o Endereço"
          defaultValue={agendamento?.endereco}
          ref={enderecoRef}
        />
        <label htmlFor="numero">N°:</label>
        <input
          type="text"
          name="numero"
          defaultValue={agendamento?.numero}
          placeholder="Digite o Numero da casa"
          ref={numeroRef}
        />
        <label htmlFor="cidade">Cidade:</label>
        <input
          type="text"
          name="cidade"
          placeholder="Digite a Cidade"
          defaultValue={agendamento?.cidade}
          ref={cidadeRef}
        />
        <label htmlFor="barrio">Barrio:</label>
        <input
          type="text"
          name="barrio"
          placeholder="Digite o Barrio"
          defaultValue={agendamento?.barrio}
          ref={barrioRef}
        />
        <label htmlFor="data-agendada">Data Marcada:</label>
        <input
          type="date"
          name="data_agendado"
          placeholder="Digite a Data Agendada"
          defaultValue={agendamento?.data_agendado}
          ref={data_agendadoRef}
        />
        <label htmlFor="hora">Hora Marcada:</label>
        <input
          type="time"
          name="horario"
          placeholder="Digite a Hora Marcada"
          defaultValue={agendamento?.horario}
          ref={horarioRef}
        />
        <label htmlFor="observacao">Observação:</label>
        <textarea
          name="observacao"
          placeholder="Digite a o Observação"
          defaultValue={agendamento?.observacao}
          ref={observacaoRef}
        ></textarea>
        {errors && <p className={style.errors}>{errors}</p>}
        <button>Salvar</button>
      </form>
    </div>
  );
}
