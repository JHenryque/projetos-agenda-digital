import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import FoundError from "./components/FoundError/index.tsx";
import Layout from "./layouts/Layout.tsx";
import Home from "./components/Home/Home.tsx";
import AddAgenda from "./components/modal/AddAgenda.tsx";
import AddLembrete from "./components/modal/AddLembrete.tsx";
import { UserProvider } from "./config/UserContext.tsx";
import EditeLembrete from "./components/modal/EditeLembrete.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/add-lembrete" element={<AddLembrete />} />
          <Route path="/edit-lembrete/:id" element={<EditeLembrete />} />
          <Route path="/add-agenda" element={<AddAgenda />} />
        </Route>
        <Route path="*" element={<FoundError />} />
      </Routes>
    </UserProvider>
  </BrowserRouter>
);
