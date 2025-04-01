import { useState } from "react";
import EditDashboard from "../components/EditDashboard";
import FormDashboard from "../components/FormDashboard";
import MainDashboard from "../components/MainDashboard";

export default function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  return (
    <>
      <section className="dashboard-left">
        <div className="button-container">
          <button type="button" onClick={() => setActiveComponent("dashboard")}>
            Dashboard
          </button>
          <button type="button" onClick={() => setActiveComponent("form")}>
            Ajouter un Personnage
          </button>
          <button type="button" onClick={() => setActiveComponent("edit")}>
            Modifier un Personnage
          </button>
        </div>
      </section>
      <section className="dashboard-right">
        {activeComponent === "dashboard" && <MainDashboard />}
        {activeComponent === "form" && <FormDashboard />}
        {activeComponent === "edit" && <EditDashboard />}
      </section>
    </>
  );
}
