/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import style from "./modal.module.css";

export default function AddAgenda() {
  const [errors, setErrors] = useState<string>("");
  const [lemCredentials, setLemCredentials] = useState({});

  function handleOnchange(e: string | any) {
    setLemCredentials({ ...lemCredentials, [e.target.name]: e.target.value });
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    const newAgenda = {
      name: lemCredentials.name,
      telefone: lemCredentials.telefone,
      endereco: lemCredentials.endereco,
      numero: lemCredentials.numero,
      cidade: lemCredentials.cidade,
      barrio: lemCredentials.barrio,
      data_agendado: lemCredentials.data_agendado,
      horario: lemCredentials.horario,
      observacao: lemCredentials.observacao,
    };
    handlerValidation(lemCredentials, newAgenda);
  };

  const handlerValidation = (event: any, newAgenda: any) => {
    if (
      !event.name ||
      !event.telefone ||
      !event.endereco ||
      !event.numero ||
      !event.cidade ||
      !event.barrio ||
      event.data_agendado === "" ||
      event.horario === "" ||
      !event.observacao
    ) {
      setErrors("*Preencha todos os campos!");
      return;
    } else {
      console.log(newAgenda);
      setErrors("");
    }
  };

  return (
    <div className={style.modal}>
      <form action="#" className={style.form_}>
        <h2>Formulario de Agenda</h2>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => handleOnchange(e)}
          placeholder="Digite o Nome"
        />
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="text"
          name="telefone"
          onChange={(e) => handleOnchange(e)}
          placeholder="Digite o Telefone"
        />
        <label htmlFor="endereco">Endereço:</label>
        <input
          type="text"
          name="endereco"
          onChange={(e) => handleOnchange(e)}
          placeholder="Digite o Endereço"
        />
        <label htmlFor="numero">N°:</label>
        <input
          type="text"
          name="numero"
          onChange={(e) => handleOnchange(e)}
          placeholder="Digite o Numero da casa"
        />
        <label htmlFor="cidade">Cidade:</label>
        <input
          type="text"
          name="cidade"
          onChange={(e) => handleOnchange(e)}
          placeholder="Digite a Cidade"
        />
        <label htmlFor="barrio">Barrio:</label>
        <input
          type="text"
          name="barrio"
          onChange={(e) => handleOnchange(e)}
          placeholder="Digite o Barrio"
        />
        <label htmlFor="data-agendada">Data Marcada:</label>
        <input
          type="date"
          name="data-agendada"
          onChange={(e) => handleOnchange(e)}
          placeholder="Digite a Data Agendada"
        />
        <label htmlFor="hora">Hora Marcada:</label>
        <input
          type="time"
          name="horario"
          onChange={(e) => handleOnchange(e)}
          placeholder="Digite a Hora Marcada"
        />
        <label htmlFor="observacao">Observação:</label>
        <textarea
          name="observacao"
          onChange={(e) => handleOnchange(e)}
          placeholder="Digite a o Observação"
        ></textarea>
        {errors && <p className={style.errors}>{errors}</p>}
        <button onClick={handleOnSubmit}>Salvar</button>
      </form>
    </div>
  );
}
