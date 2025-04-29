import CardAgenda from "./CardAgenda/CardAgenda";
import CardLembrete from "./CardLembrete/CardLembrete";
import { UserContext } from "../../config/UserContext";
import style from "./Home.module.css";
import Loader from "../FullPageLoader/FullPageLoader";
import { useEffect, useState } from "react";
import EditeLembrete from "../modal/EditeLembrete";
import EditeAgenda from "../modal/EditeAgenda";
import { Link } from "react-router";

export default function Home() {
  const { state, dispatch } = UserContext();
  const [editLembrete, setEditLembrete] = useState(false);
  const [editAgenda, setEditAgenda] = useState(false);

  function handlerEdtion(tipo: string) {
    if (confirm(`Deseja editar?`)) {
      if (tipo === "lembrete") {
        setEditLembrete(true);
      } else {
        setEditAgenda(true);
      }
    }
  }

  function handlerDelete(id: number, tipo: string) {
    if (confirm(`Deseja deletar?`)) {
      if (tipo === "lembrete") {
        dispatch({ type: "setDeleteLembrete", payload: id });
      } else {
        dispatch({ type: "setDeleteAgendamento", payload: id });
      }
    }
    dispatch({ type: "setStatus", payload: "ready" });
    return id;
  }

  useEffect(() => {
    localStorage.setItem("lembretes", JSON.stringify(state.lembretes));
    localStorage.setItem("agendamento", JSON.stringify(state.agendamento));
  }, [state.lembretes, state.agendamento]);

  const removerDados = async ({ tipo }: { tipo: string }) => {
    if (confirm(`Deseja remover todos os ${tipo}s?`)) {
      if (tipo === "lembrete") {
        localStorage.removeItem("lembretes");
      } else {
        localStorage.removeItem("agendamento");
      }
    }
    return window.location.reload();
  };

  return (
    <section className={style.container_home}>
      {state.status === "fetching" ? (
        <Loader />
      ) : state.status === "error" ? (
        <h2>Erro ao carregar os dados</h2>
      ) : (
        <>
          {state.lembretes.length > 0 ? (
            <>
              <fieldset className={style.lembretes}>
                <button
                  className={style.button}
                  onClick={() => removerDados({ tipo: "lembrete" })}
                >
                  Remover todos
                </button>
                <legend>Lembretes</legend>
                <CardLembrete
                  handlerEdtion={handlerEdtion}
                  handlerDelete={handlerDelete}
                />
                {editLembrete && <EditeLembrete />}
              </fieldset>
            </>
          ) : (
            <h3>
              Lembretes Vazio{" "}
              <Link to="/add-lembrete">
                <button>Adicionar lembrete</button>
              </Link>
            </h3>
          )}

          <div className="list_agenda">
            {state.agendamento.length > 0 ? (
              <fieldset className={style.agenda}>
                <button
                  className={style.button}
                  onClick={() => removerDados({ tipo: "agendamento" })}
                >
                  Remover todos
                </button>
                <legend>Agenda</legend>

                <CardAgenda
                  handlerEdtion={handlerEdtion}
                  handlerDelete={handlerDelete}
                />
                {editAgenda && <EditeAgenda />}
              </fieldset>
            ) : (
              <h3>
                Agendamento Vazio{" "}
                <Link to="/add-agenda">
                  <button>Adicionar agendamento</button>
                </Link>
              </h3>
            )}
          </div>
        </>
      )}
    </section>
  );
}
