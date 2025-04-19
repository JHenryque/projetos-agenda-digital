import { NavLink } from "react-router";
import style from "./MenuAsider.module.css";
import { useState } from "react";

type Status = "inicio" | "add-agenda" | "add-lembrete";
export interface IsActive {
  isActive: Status;
}

export default function MenuAsider() {
  const [isActive, setIsActive] = useState<IsActive>({ isActive: "inicio" });

  return (
    <aside className={style._asider}>
      <nav className={style.nav_asider}>
        <ul className={style.nav_menu}>
          <li
            onClick={() => setIsActive({ isActive: "inicio" })}
            className={isActive.isActive === "inicio" ? style.active : ""}
          >
            <NavLink to="/">
              <i className="fa-solid fa-house-chimney-user"></i> Inicio
            </NavLink>
          </li>
          <li
            onClick={() => setIsActive({ isActive: "add-agenda" })}
            className={isActive.isActive === "add-agenda" ? style.active : ""}
          >
            <NavLink to="/add-agenda">
              <i className="fa-regular fa-calendar-plus"></i> ADD Novo Agenda
            </NavLink>
          </li>
          <li
            onClick={() => setIsActive({ isActive: "add-lembrete" })}
            className={isActive.isActive === "add-lembrete" ? style.active : ""}
          >
            <NavLink to="/add-lembrete">
              <i className="fa-regular fa-calendar-days"></i> ADD Novo Lembrete
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className={style.nav_mobile}>
          <li
            onClick={() => setIsActive({ isActive: "inicio" })}
            className={
              isActive.isActive === "inicio" ? style.active_mobile : ""
            }
          >
            <NavLink to="/">
              <i className="fa-solid fa-house-chimney-user"></i>
            </NavLink>
          </li>
          <li
            onClick={() => setIsActive({ isActive: "add-agenda" })}
            className={
              isActive.isActive === "add-agenda" ? style.active_mobile : ""
            }
          >
            <NavLink to="/add-agenda">
              <i className="fa-regular fa-calendar-plus"></i>
            </NavLink>
          </li>
          <li
            onClick={() => setIsActive({ isActive: "add-lembrete" })}
            className={
              isActive.isActive === "add-lembrete" ? style.active_mobile : ""
            }
          >
            <NavLink to="/add-lembrete">
              <i className="fa-regular fa-calendar-days"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
