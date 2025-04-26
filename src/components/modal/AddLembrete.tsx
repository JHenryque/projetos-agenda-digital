/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import style from "./modal.module.css";
import { UserContext } from "../../config/UserContext";

export default function AddLembrete() {
  const [name, setName] = useState("");
  const [descricao, setDescricao] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState<string>("");

  const { state, dispatch } = UserContext();

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    if (!name || !descricao || !date) {
      setErrors("Preencha todos os campos!");
    } else {
      console.log("Enviada com sucesso  !");
      const id = state.lembretes.length
        ? Math.max(...state.lembretes.map((todo) => todo.id)) + 1
        : 1;
      const newLembrete = { id, name, descricao, date };
      dispatch({ type: "setLembrete", payload: newLembrete });
      setErrors("");
      dispatch({ type: "setStatus", payload: "ready" });
      setName("");
      setDescricao("");
      setDate("");
    }
  };

  return (
    <div className={style.modal}>
      <form action="#" className={style.form_}>
        <h2>Formulario de Lembrete</h2>
        <label htmlFor="">Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o nome"
        />
        <label htmlFor="">Descrição:</label>
        <textarea
          placeholder="Digite a descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        ></textarea>
        <label htmlFor="">Data:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Digite a data"
        />
        {errors && <p className={style.errors}>{errors}</p>}
        <button onClick={handleOnSubmit} type="submit">
          Salvar
        </button>
      </form>
    </div>
  );
}
