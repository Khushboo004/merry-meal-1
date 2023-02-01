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
import Home from "./pages/Home";
import PublicUser from "./pages/publicUser/PublicUser";
import Meal from "./pages/Meal";
import MealDetails from "./pages/MealDetails";
import AddCart from "./pages/AddCart";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Registration from "./pages/Registration";
import CaregiverReq from "./pages/CaregiverReq";
import EditProfile from "./pages/EditProfile";
import AddMeal from "./pages/Partner/AddMeal";
import TimeTable from "./pages/CareGiver/TimeTable";
import UserHome from "./pages/Partner/UserHome";
import CareGiverHome from "./pages/CareGiver/CareGiverHome";

function App() {
  const [auth, setAuth] = useState({
    name: "Aung Thiha Tun",
    role: [
      "ADMIN",
      "VOLUNTEER",
      "RIDER",
      "CAREGIVER",
      "PARTNER",
      "MEMBER",
      "PARTNER",
    ],
  });
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<PublicUser />}></Route>
          <Route path={"meals"} element={<Meal />} />
          <Route path={"meal-details"} element={<MealDetails />} />
          <Route path={"add-cart"} element={<AddCart />} />
          <Route path={"login"} element={<Login />} />
          <Route path={"about-us"} element={<AboutUs />} />
          <Route path={"contact-us"} element={<ContactUs />} />
          <Route path={"register"} element={<Registration />} />
          <Route path={"caregiverReq"} element={<CaregiverReq />} />
          <Route path={"profile"} element={<Profile />}></Route>
          <Route path={"edit-pro"} element={<EditProfile />}></Route>
          <Route path={"time-table"} element={<TimeTable />} />
          <Route path={"edit-pro"} element={<EditProfile />} />
        </Route>

        <Route
          element={
            <ProtectedRoute isAllowed={auth.role.includes("CAREGIVER")} />
          }
        />
        <Route path={"/caregiver"} element={<Dashboard role={"CAREGIVER"} />}>
          <Route index element={<CareGiverHome />}></Route>
          <Route path={"profile"} element={<Profile />}></Route>
          <Route path={"time-table"} element={<TimeTable />} />
        </Route>

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
          element={<ProtectedRoute isAllowed={auth.role.includes("PARTNER")} />}
        >
          <Route path={"/partner"} element={<Dashboard role={"PARTNER"} />}>
            <Route index element={<UserHome />}></Route>
            <Route path={"meals"} element={<Meal />}></Route>
            <Route path={"meals/details"} element={<MealDetails />} />
            <Route path={"profile"} element={<Profile />}></Route>
            <Route path={"add-meal"} element={<AddMeal />}></Route>
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
