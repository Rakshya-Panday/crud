import React, { useEffect } from "react";
import Input from "../components/Input";
import Select from "../components/Select";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { updateDetails, getDataById } from "../store/userSlice";
import { useState } from "react";

const Update = () => {
  const { id } = useParams();
  const { userDetails } = useSelector((state) => state.users);
  const dispatch = useDispatch();
   
  const [userDetail,setUserDetail]= useState({});
  const [input, setInput] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dateofBirth: "",
    address: {
      city:"",
      district: "",
      provience: "",
      country: "",
    },
  });

 
  useEffect(()=>{
    const toBeUpdateInput = userDetails.find(item=>item.id===id);
    console.log(userDetails,toBeUpdateInput);
    console.log(input);
    setInput(toBeUpdateInput);
   
  },[id])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
      address: {
        ...prevInput.address,
        [name]: value,
      },
    }));
  };

  const updateData = (e) => {
    e.preventDefault();
    dispatch(updateDetails({id,input}));

    // setInput("")
  };
  return (
    <div className="w-full max-w-2xl mx-auto  rounded-lg px-4 py-3 text-white">
        <div className="mb-4 bg-gray-400">
        <h1 className="text-center text-2xl font-bold mb-8 mt-2">
            Update Your Details
          </h1>
      <form onSubmit={updateData} className="flex flex-wrap">
        <div className="w-full px-5">
          <Input
            label="Name:"
            className=""
            name="name"
            value={input.name}
            onChange={handleChange}
          />

          <Input
            label="Email:"
            name="email"
            value={input.email}
            onChange={handleChange}
          />

          <Input
            label="PhoneNumber:"
            name="phoneNumber"
              value={input.phoneNumber}
            onChange={handleChange}
          />
          <Input
            label=" Date of Birth:"
            type="date"
            name="dateofBirth"
            value={input.dateofBirth}
            onChange={handleChange}
          />

          <Input
            label=" City:"
            name="city"
            value={input?.address?.city}
            onChange={handleChange}
          />
          <Input
            label=" District:"
            placeholder="Enter your district"
            name="district"
            value={input.address?.district}
            onChange={handleChange}
          />
          <div className="flex w-6/6 mb-4">
            <Select
              options={[
                "Provience1",
                "Provience2",
                "Provience3",
                "Provience4",
                "Provience5",
                "Provience6",
                "Provience7",
              ]}
              label="Provience"
              name="provience"
              className=" ml- "
              value={input?.address?.provience}
              onChange={handleChange}
            />
            <Select
              options={["Nepal", "India", "China", "America"]}
              label="Country"
              name="country"
              className="ml-3  "
              value={input?.address?.country}
              onChange={handleChange}
            />
          </div>

          <button
            className="p-2 m-4 font-bold bg-green-500 text-white rounded-lg w-1/2"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Update;
