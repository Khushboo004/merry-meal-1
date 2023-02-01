import "../styles/MenuItem.css";
import DashboardNav from "./DashboardNav";

import Content from "./Content";
import SidebarNav from "./SidebarNav";
type Props = {
  role: String;
};
function Dashboard(props: Props) {
  const { role } = props;
  return (
    <div className="grid grid-cols-9">
      <div className="col-span-2 border h-full">
        <div className="p-5">
          <h1 className="text-center text-3xl text-green-400">Merry Meal</h1>
        </div>
        <SidebarNav role={role} />
      </div>
      <div className="col-span-7">
        <DashboardNav role={role} />
        <Content />
      </div>
    </div>
  );
}

export default Dashboard;
