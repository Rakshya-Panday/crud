import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeDetails, updateDetails } from "../store/userSlice";

const Table = () => {
  const select = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();
  console.log(select);

  // delete
  // dispatch(deletedetails(id))
  //edit 
  // dispatch({id,deleted})

  return (
    <>
      <div className="text-3xl font-bold"> User Details</div>
      <table className="min-w-full divide-y divide-gray-200 border-gray-200">
        <thead>
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
        <tbody className="bg-white divide-y divide-gray-200 border-gray-400">
          {select.map((data, id) => (
            <>
              <tr key={id}>
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
                    Update
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
