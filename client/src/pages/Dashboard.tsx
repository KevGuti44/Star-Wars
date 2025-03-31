import { useState } from "react";
import EditDashboard from "../components/EditDashboard";
// import FormDashBoard from "../components/FormDashBoard";
import MainDashboard from "../components/MainDashboard";
// import UserDashBoard from "../components/UserDashboard";
// import "../styles/dashboard.css";

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
          {/* <button type="button" onClick={() => setActiveComponent("users")}>
            Liste utilisateurs
          </button> */}
          <button type="button" onClick={() => setActiveComponent("edit")}>
            Modifier un Personnage
          </button>
        </div>
      </section>
      <section className="dashboard-right">
        {activeComponent === "dashboard" && <MainDashboard />}
        {/* {activeComponent === "form" && <FormDashBoard />}
        {activeComponent === "users" && <UserDashBoard />} */}
        {activeComponent === "edit" && <EditDashboard />}
      </section>
    </>
  );
}
