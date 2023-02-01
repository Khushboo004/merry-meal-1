import SearchIcon from "@mui/icons-material/Search";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { useState } from "react";
import filteringMeal from "../../utils/Filtering";
import ViewMore from "../ViewMore";

type Props = {};

const DeliManagement = (props: Props) => {
  const allDelis = [
    {
      deiveryNumber: 949943949349,
      status: "Delivered",
      address: "Mandalay",
      orderBy: "Aung Thiha Tun",
      deliveredBy: "Justin",
    },
    {
      deiveryNumber: 949943949350,
      status: "Pending",
      address: "Yangon",
      orderBy: "Aung Thiha Tun",
      deliveredBy: "Justin",
    },
  ];
  const [deliLists, setDeliLists] = useState(allDelis);
  const filterDeli = (e: React.ChangeEvent<HTMLSelectElement>) => {
    filteringMeal(e, setDeliLists, allDelis);
  };
  return (
    <div className="py-5">
      <h1 className="text-4xl font-bold text-green-400 text-center">
        Delivery Info
      </h1>
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
      <div className="py-5 px-5">
        <FormControl>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Delivery Status
          </InputLabel>
          <NativeSelect
            defaultValue={"all"}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            onChange={(e) => filterDeli(e)}
          >
            <option value={"all"}>All</option>
            <option value={"Delivered"}>Delivered</option>
            <option value={"Ordered"}>Ordered</option>
            <option value={"Pending"}>Pending</option>
          </NativeSelect>
        </FormControl>
      </div>
      <div className="p-4">
        <table className="table-auto border rounded-md">
          <thead>
            <tr className="border-b-4 border-green-400">
              <th className="p-5">No.</th>
              <th className="p-5">Delivery Number</th>
              <th className="p-5">Deli Status</th>
              <th className="p-5">Address</th>
              <th className="p-5">Order by</th>
              <th className="p-5">Delivered by</th>
              <th className="p-5">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {deliLists.map((deli, index) => (
              <tr>
                <td className="p-5">{index + 1}</td>
                <td className="p-5">{deli.deiveryNumber}</td>
                <td className="p-5">{deli.status}</td>
                <td className="p-5">{deli.address}</td>
                <td className="p-5">{deli.orderBy}</td>
                <td className="p-5">{deli.deliveredBy}</td>
                <td className="p-2">
                  <button className="p-2 bg-green-500 rounded-md text-white mr-3">
                    Edit
                  </button>
                  <button className="p-2 bg-red-500 rounded-md text-white ">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ViewMore />
    </div>
  );
};

export default DeliManagement;
