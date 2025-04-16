import { NavLink } from "react-router";
import style from "./MenuAsider.module.css";

export default function MenuAsider() {
  return (
    <aside>
      <nav>
        <ul className={style.nav_menu}>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/add-agenda">ADD Novo Agenda</NavLink>
          </li>
          <li>
            <NavLink to="/add-lembrete">ADD Novo Lembrete</NavLink>
          </li>
        </ul>

        <ul className={style.nav_mobile}>
          <li>
            <NavLink to="/">
              <i className="fa-solid fa-house-chimney-user"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-agenda">
              <i className="fa-regular fa-calendar-plus"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-lembrete">
              <i className="fa-regular fa-calendar-days"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
