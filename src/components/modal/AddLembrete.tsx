/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import style from "./modal.module.css";
import { UserContext } from "../../config/UserContext";

export default function AddLembrete() {
  const [lemCredentials, setLemCredentials] = useState({});
  const [errors, setErrors] = useState<string>("");

  const { dispatch } = UserContext();

  function handleOnchange(e: string | any) {
    setLemCredentials({ ...lemCredentials, [e.target.name]: e.target.value });
  }

  const handleOnSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const newLembrete = {
      name: lemCredentials.name,
      descricao: lemCredentials.descricao,
      data: lemCredentials.data,
    };

    handlerValidation(lemCredentials, newLembrete);
  };

  const handlerValidation = (event: any, newLembrete: any) => {
    if (!event.name || !event.descricao || !event.data) {
      setErrors("Preencha todos os campos!");
    } else {
      dispatch({ type: "setLembrete", payload: newLembrete });
      setErrors("");
      dispatch({ type: "setStatus", payload: "fetching" });
    }
  };

  return (
    <div className={style.modal}>
      <form action="#" className={style.form_}>
        <h2>Formulario de Lembrete</h2>
        <label htmlFor="">Nome:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => handleOnchange(e)}
          placeholder="Digite o nome"
        />
        <label htmlFor="">Descrição:</label>
        <textarea
          placeholder="Digite a descrição"
          name="descricao"
          onChange={(e) => handleOnchange(e)}
        ></textarea>
        <label htmlFor="">Data:</label>
        <input
          type="date"
          name="data"
          placeholder="Digite a data"
          onChange={(e) => handleOnchange(e)}
        />
        {errors && <p className={style.errors}>{errors}</p>}
        <button onClick={handleOnSubmit} type="submit">
          Salvar
        </button>
      </form>
    </div>
  );
}
