import React from "react";
import Input from "./Input";
import Select from "./Select";

function Update() {
  return (
    <form onSubmit={submitData} className="flex flex-wrap">
      <div className="w-full px-5">
        <Input
          label="Name:"
          placeholder="Enter your name"
          className=""
          name="name"
        />
        <p>{formError.name}</p>
        <Input label="Email:" placeholder="Enter your email" name="email" />
        
        <Input
          label="PhoneNumber:"
          placeholder="Enter your phonenumber"
          name="phoneNumber"
        />
        <Input
          label=" Date of Birth:"
          placeholder="Enter your date of birth"
          type="date"
          name="dateofBirth"
        />

        <Input label=" City:" placeholder="Enter your city" name="city" />
        <Input
          label=" District:"
          placeholder="Enter your district"
          name="district"
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
          />
          <Select
            options={["Nepal", "India", "China", "America"]}
            label="Country"
            name="country"
            className="ml-3  "
          />
        </div>

        <button
          className="p-2 m-4 font-bold bg-blue-500 text-white rounded-lg w-1/2"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default Update;
