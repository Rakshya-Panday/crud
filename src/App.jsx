import { useEffect, useState } from "react";
import "./App.css";
import { addDetails, updateDetails, removeDetails } from "./store/userSlice";

import AddDetails from "./components/AddDetails";
import Table from "./components/Table";


function App() {
  return (
    <>
      <div className="w-full max-w-2xl mx-auto  rounded-lg px-4 py-3 text-white">
        <div className="mb-4 bg-gray-400">
          <h1 className="text-center text-2xl font-bold mb-8 mt-2">
            Insert Your Details
          </h1>
          <AddDetails />
        </div>
      </div>
      <div>
        <Table />
      </div>
    </>
  );
}

export default App;
