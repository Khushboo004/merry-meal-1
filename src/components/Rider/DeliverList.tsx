import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ViewMore from "../ViewMore";
import TakeOrderButton from "./TakeOrderButton";
import { Link } from "react-router-dom";
type Props = {};

const DeliverList = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-2 p-5">
        <div className="search">
          <div className="border border-green-400 rounded-lg flex p-3 w-64 shadow-sm shadow-green-300">
            <SearchIcon />
            <input
              type="search"
              className="ml-2 w-full h-full focus:outline-none"
              placeholder="Search Here"
            />
          </div>
        </div>
      </div>
      <div className="py-1 px-5">
        <FormControl>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Status
          </InputLabel>
          <NativeSelect
            defaultValue={"all"}
            inputProps={{
              name: "status",
              id: "uncontrolled-native",
            }}
          >
            <option value={"all"}>All</option>
            <option value={"Ordered"}>Ordered</option>
            <option value={"Pending"}>Pending</option>
            <option value={"Delivered"}>Delivered</option>
          </NativeSelect>
        </FormControl>
      </div>
      <div className="p-4">
        <table className="table-auto border rounded-md">
          <thead className="sticky top-16 bg-white p-2 border-b-4 border-green-400">
            <tr>
              <th className="p-5">No.</th>
              <th className="p-5">Delivery Number</th>
              <th className="p-5">Deli Status</th>
              <th className="p-5">Address</th>
              <th className="p-5">Order by</th>
              <th className="p-5">Delivered by</th>
              <th className="p-5">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm h-3">
            <tr>
              <td className="p-2">1</td>
              <td className="p-2">04445551212</td>
              <td className="p-2">Ordered</td>
              <td className="p-2">Mandalay, Myanmar</td>
              <td className="p-2">Aung Thiha Tun</td>
              <td className="p-2"> --- </td>
              <td className="p-2">
                <Link to={"/rider/deliveries/detail?userRole=RIDER"}>
                  <button className="p-2 bg-green-500 rounded-md text-white mr-3">
                    View Detail
                  </button>
                </Link>
                <TakeOrderButton />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ViewMore />
    </div>
  );
};

export default DeliverList;
