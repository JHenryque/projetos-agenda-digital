/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import style from "./modal.module.css";
import { UserContext } from "../../config/UserContext";
//import { useNavigate } from "react-router";

export default function AddAgenda() {
  const { state, dispatch } = UserContext();
  const [errors, setErrors] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  //const navigate = useNavigate();

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const id =
      state.agendamento.length > 0
        ? Math.max(...state.agendamento.map((todo) => todo.id)) + 1
        : 1;
    const name = document.querySelector("input[name='name']")?.value;
    const telefone = document.querySelector("input[name='telefone']")?.value;
    const endereco = document.querySelector("input[name='endereco']")?.value;
    const numero = document.querySelector("input[name='numero']")?.value;
    const cidade = document.querySelector("input[name='cidade']")?.value;
    const barrio = document.querySelector("input[name='barrio']")?.value;
    const data_agendado = document.querySelector(
      "input[name='data_agendado']"
    )?.value;
    const horario = document.querySelector("input[name='horario']")?.value;
    const observacao = document.querySelector(
      "textarea[name='observacao']"
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
      document.querySelector("input[name='name']").value = "";
      document.querySelector("input[name='telefone']").value = "";
      document.querySelector("input[name='endereco']").value = "";
      document.querySelector("input[name='numero']").value = "";
      document.querySelector("input[name='cidade']").value = "";
      document.querySelector("input[name='barrio']").value = "";
      document.querySelector("input[name='data_agendado']").value = "";
      document.querySelector("input[name='horario']").value = "";
      document.querySelector("textarea[name='observacao']").value = "";
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
        <input type="text" name="name" placeholder="Digite o Nome" />
        <label htmlFor="telefone">Telefone:</label>
        <input type="text" name="telefone" placeholder="Digite o Telefone" />
        <label htmlFor="endereco">Endereço:</label>
        <input type="text" name="endereco" placeholder="Digite o Endereço" />
        <label htmlFor="numero">N°:</label>
        <input
          type="text"
          name="numero"
          placeholder="Digite o Numero da casa"
        />
        <label htmlFor="cidade">Cidade:</label>
        <input type="text" name="cidade" placeholder="Digite a Cidade" />
        <label htmlFor="barrio">Barrio:</label>
        <input type="text" name="barrio" placeholder="Digite o Barrio" />
        <label htmlFor="data-agendada">Data Marcada:</label>
        <input
          type="date"
          name="data_agendado"
          placeholder="Digite a Data Agendada"
        />
        <label htmlFor="hora">Hora Marcada:</label>
        <input type="time" name="horario" placeholder="Digite a Hora Marcada" />
        <label htmlFor="observacao">Observação:</label>
        <textarea
          name="observacao"
          placeholder="Digite a o Observação"
        ></textarea>
        {errors && <p className={style.errors}>{errors}</p>}
        {success && <p className={style.success}>{success}</p>}
        <button>Salvar</button>
      </form>
    </div>
  );
}
