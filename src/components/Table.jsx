import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeDetails, updateDetails } from "../store/userSlice";
import { Link } from "react-router-dom";

const Table = () => {
  const {userDetails} = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-3xl font-bold m-4"> User Details</div>
      <table className="min-w-full divide-y divide-gray-200 border-gray-200 ">
        <thead className="mb-4">
          <tr>
            {/* <th>Id</th> */}
            <th>Name</th>
            <th>Email</th>
            <th>PhoneNumber</th>
            <th>Date of Birth</th>
            <th>City</th>
            <th>District</th>
            <th>Provience</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white  text-black divide-y divide-gray-200 border-gray-400">
          {userDetails?.map((data, index) => (
            <>
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.dateofBirth}</td>
                <td>{data.address.city}</td>
                <td>{data.address.district}</td>
                <td>{data.address.provience}</td>
                <td>{data.address.country}</td>
                <td>
                  <button 
                  className="bg-green-500 hover:bg-700 m-2 text-white font-bold py-2 px-4 roumded-lg"
                  onClick={()=>dispatch(updateDetails(data.id))}
                  >
                    <Link to = {`/update/${data.id}`}>Update</Link>
                  </button>
                  <button
                    className="bg-red-500 hover:bg-700 text-white font-bold py-2 px-4 roumded-lg"
                    onClick={() => dispatch(removeDetails(data.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
