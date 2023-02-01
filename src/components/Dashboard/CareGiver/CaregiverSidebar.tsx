import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Link } from "react-router-dom";

const CaregiverSidebar = () => {
  return (
    <div>
      <ul className="p-4 uppercase text-left text-xl cursor-pointer font-bold ">
        <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
          <Link to={"/caregiver"}>
            <HomeIcon className="inline-block mr-2 mb-2 text-gray-900" />
            Home
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
          <Link to={"/caregiver/time-table"}>
            <AccessTimeFilledIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
            Time table
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
          <Link to={"/caregiver/profile"}>
            <PersonIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
            My Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CaregiverSidebar;
