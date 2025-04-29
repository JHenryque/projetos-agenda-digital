/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import style from "./modal.module.css";
import { UserContext } from "../../config/UserContext";
import { useNavigate, useParams } from "react-router";

export default function EditeAgenda() {
  const [errors, setErrors] = useState<string>("");
  const { state, dispatch } = UserContext();
  const navegate = useNavigate();
  const { id } = useParams();

  const agendamento = state.agendamento.find((item) => item.id === Number(id));

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    const idAgenda = Number(id);
    const name = document.querySelector("input[name=name]")?.value;
    const telefone = document.querySelector("input[name=telefone]")?.value;
    const endereco = document.querySelector("input[name=endereco]")?.value;
    const numero = document.querySelector("input[name=numero]")?.value;
    const cidade = document.querySelector("input[name=cidade]")?.value;
    const barrio = document.querySelector("input[name=barrio]")?.value;
    const data_agendado = document.querySelector(
      "input[name=data_agendado]"
    )?.value;
    const horario = document.querySelector("input[name=horario]")?.value;
    const observacao = document.querySelector(
      "textarea[name=observacao]"
    )?.value;

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
          placeholder="Digite o Nome"
          defaultValue={agendamento?.name}
        />
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="text"
          name="telefone"
          placeholder="Digite o Telefone"
          defaultValue={agendamento?.telefone}
        />
        <label htmlFor="endereco">Endereço:</label>
        <input
          type="text"
          name="endereco"
          placeholder="Digite o Endereço"
          defaultValue={agendamento?.endereco}
        />
        <label htmlFor="numero">N°:</label>
        <input
          type="text"
          name="numero"
          defaultValue={agendamento?.numero}
          placeholder="Digite o Numero da casa"
        />
        <label htmlFor="cidade">Cidade:</label>
        <input
          type="text"
          name="cidade"
          placeholder="Digite a Cidade"
          defaultValue={agendamento?.cidade}
        />
        <label htmlFor="barrio">Barrio:</label>
        <input
          type="text"
          name="barrio"
          placeholder="Digite o Barrio"
          defaultValue={agendamento?.barrio}
        />
        <label htmlFor="data-agendada">Data Marcada:</label>
        <input
          type="date"
          name="data_agendado"
          placeholder="Digite a Data Agendada"
          defaultValue={agendamento?.data_agendado}
        />
        <label htmlFor="hora">Hora Marcada:</label>
        <input
          type="time"
          name="horario"
          placeholder="Digite a Hora Marcada"
          defaultValue={agendamento?.horario}
        />
        <label htmlFor="observacao">Observação:</label>
        <textarea
          name="observacao"
          placeholder="Digite a o Observação"
          defaultValue={agendamento?.observacao}
        ></textarea>
        {errors && <p className={style.errors}>{errors}</p>}
        <button>Salvar</button>
      </form>
    </div>
  );
}
