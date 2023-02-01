import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import DataSummary from "./components/Admin/DataSummary";
import UserInfo from "./components/Admin/UserInfo";
import MealManagement from "./components/Admin/MealManagement";
import DeliManagement from "./components/Admin/DeliManagement";
import DonationManagement from "./components/Admin/DonationManagement";
import Deliveries from "./components/Rider/Deliveries";
import DeliverList from "./components/Rider/DeliverList";
import DeliverDetail from "./components/Rider/DeliverDetail";
import { useState } from "react";
import ProtectedRoute from "./components/Security/ProtectedRoute";
import MealAssess from "./components/Volunteer/MealAssess";

function App() {
  const [auth, setAuth] = useState({
    name: "Aung Thiha Tun",
    role: ["ADMIN", "VOLUNTEER", "RIDER", "CAREGIVER", "PARTNER", "MEMBER"],
  });
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          element={<ProtectedRoute isAllowed={auth.role.includes("ADMIN")} />}
        >
          <Route path={"/admin"} element={<Dashboard role={"ADMIN"} />}>
            <Route index element={<DataSummary />}></Route>
            <Route path={"profile"} element={<Profile />}></Route>
            <Route path={"dataSummary"} element={<DataSummary />}></Route>
            <Route path={"userinfo"} element={<UserInfo />}></Route>
            <Route path={"mealinfo"} element={<MealManagement />}></Route>
            <Route path={"deliinfo"} element={<DeliManagement />}></Route>
            <Route path={"donateinfo"} element={<DonationManagement />}></Route>
          </Route>
        </Route>
        <Route
          element={<ProtectedRoute isAllowed={auth.role.includes("RIDER")} />}
        >
          <Route path={"/rider"} element={<Dashboard role={"RIDER"} />}>
            <Route index element={<Profile />}></Route>
            <Route path={"profile"} element={<Profile />}></Route>
            <Route path={"deliveries"} element={<Deliveries />}>
              <Route index element={<DeliverList />}></Route>
              <Route path={"detail"} element={<DeliverDetail />}></Route>
            </Route>
          </Route>
        </Route>
        <Route
          element={
            <ProtectedRoute isAllowed={auth.role.includes("VOLUNTEER")} />
          }
        >
          <Route path={"/volunteer"} element={<Dashboard role={"VOLUNTEER"} />}>
            <Route index element={<Profile />}></Route>
            <Route path={"profile"} element={<Profile />}></Route>
            <Route path={"assessfood"} element={<MealAssess />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
