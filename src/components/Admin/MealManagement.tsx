import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ViewMore from "../ViewMore";
import { useState } from "react";
import filteringMeal from "../../utils/Filtering";

type Props = {};

const MealManagement = (props: Props) => {
  const allMeals = [
    {
      name: "Meal Name",
      category: "Vegetables",
      status: "Unsafe",
      img: "Meal Img",
      desc: "Meal Description",
    },
    {
      name: "Meal Name",
      category: "Fruits",
      status: "Safe",
      img: "Meal Img",
      desc: "Meal Description",
    },
  ];

  const [mealRows, setMealRows] = useState(allMeals);
  const filterMeal = (e: React.ChangeEvent<HTMLSelectElement>) => {
    filteringMeal(e, setMealRows, allMeals);
  };
  return (
    <div className="py-5">
      <h1 className="text-4xl font-bold text-green-400 text-center">
        Meal Info
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
            Meal Category
          </InputLabel>
          <NativeSelect
            defaultValue={"all"}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            onChange={(e) => filterMeal(e)}
          >
            <option value={"all"}>All</option>
            <option value={"Fruits"}>Fruits</option>
            <option value={"Vegetables"}>Vegetables</option>
            <option value={"Healthy Foods"}>Healthy Foods</option>
            <option value={"Drinks"}>Drinks</option>
            <option value={"Unhealthy Foods"}>Unhealthy Foods</option>
            <option value={"Sweets"}>Sweets</option>
          </NativeSelect>
        </FormControl>
      </div>
      <div className="p-4">
        <table className="table-auto border rounded-md">
          <thead>
            <tr className="border-b-4 border-green-400">
              <th className="p-5">No.</th>
              <th className="p-5">Meal Name</th>
              <th className="p-5">Meal Category</th>
              <th className="p-5">Meal Status</th>
              <th className="p-5">Meal Img</th>
              <th className="p-5">Meal Description</th>
              <th className="p-5">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {mealRows.map((meal, index) => (
              <tr>
                <td className="p-5">{index + 1}</td>
                <td className="p-5">{meal.name}</td>
                <td className="p-5">{meal.category}</td>
                <td className="p-5">{meal.status}</td>
                <td className="p-5">{meal.img}</td>
                <td className="p-5">{meal.desc}</td>
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

export default MealManagement;
