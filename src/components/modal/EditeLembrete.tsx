/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import style from "./modal.module.css";
import { UserContext } from "../../config/UserContext";
import { useNavigate, useParams } from "react-router";

export default function EditeLembrete() {
  const [errors, setErrors] = useState<string>("");
  const { state, dispatch } = UserContext();
  const navegate = useNavigate();
  const { id } = useParams();

  const lembretes = state.lembretes.find((item) => item.id === Number(id));

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    const idLembrete = Number(id);

    const name = document.querySelector("input[name=name]")?.value;
    const descricao = document.querySelector("textarea[name=descricao]")?.value;
    const date = document.querySelector("input[name=date]")?.value;
    const newEditeLembrete = {
      id: idLembrete,
      tipo: "lembrete",
      name,
      descricao,
      date,
    };

    if (
      !newEditeLembrete.name ||
      !newEditeLembrete.descricao ||
      !newEditeLembrete.date
    ) {
      setErrors("Preencha todos os campos!");
    } else {
      dispatch({ type: "setEditeLembrete", payload: newEditeLembrete });
      dispatch({ type: "setStatus", payload: "ready" });
      setErrors("");
      navegate("/");
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
          defaultValue={lembretes?.name}
          placeholder="Digite o nome"
        />
        <label htmlFor="">Descrição:</label>
        <textarea
          name="descricao"
          defaultValue={lembretes?.descricao}
          placeholder="Digite a descrição"
        ></textarea>
        <label htmlFor="">Data:</label>
        <input
          type="date"
          name="date"
          defaultValue={lembretes?.date}
          placeholder="Digite a data"
        />
        {errors && <p className={style.error}>{errors}</p>}
        <button onClick={handleOnSubmit} type="submit">
          Salvar
        </button>
      </form>
    </div>
  );
}
