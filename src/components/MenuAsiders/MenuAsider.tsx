import { NavLink } from "react-router";
import style from "./MenuAsider.module.css";

export default function MenuAsider() {
  return (
    <aside className={style._asider}>
      <nav className={style.nav_asider}>
        <ul className={style.nav_menu}>
          <li className={style.nav_item + " " + style.active}>
            <NavLink to="/">
              <i className="fa-solid fa-house-chimney-user"></i> Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-agenda">
              <i className="fa-regular fa-calendar-plus"></i> ADD Novo Agenda
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-lembrete">
              <i className="fa-regular fa-calendar-days"></i> ADD Novo Lembrete
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className={style.nav_mobile}>
          <li className={style.mobile_item + " " + style.active_mobile}>
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
