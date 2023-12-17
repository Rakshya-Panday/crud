import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { addDetails } from '../store/userSlice'
import Input from './Input'
import Select from './Select'


const AddDetails = ({details}) => {

  
    const[input,setInput] = useState({
      name :'',
      email :'',
      phoneNumber: '',
      dateofBirth :'',
      address :{
        city :'',
        district: '',
        provience:'',
        country:'',
      }
    })

    const[formError,setFormError] = useState({})
    const[isSubmit,setIsSubmit] = useState(false);



    // useEffect (()=>{
    //   const details = JSON.parse( localStorage.getItem("userDetails"))
    //   if(details && details.length>0){
    //     setInput(details)
    //   }
      
    //  },[])

    //  useEffect(()=>{
    //    localStorage.setItem("userDetails",JSON.stringify(userDetails))
    //  },[])
    const dispatch = useDispatch();

    const submitData =(e)=>{
     
        e.preventDefault();
        // setFormError(validate(input))
        // setIsSubmit(true)
        dispatch(addDetails(input))
        // setInput("")
      }

    const handleChange = (e)=>{
    const{name,value}= e.target;
  
   setInput(prevInput=>({
     ...prevInput,
    [name]:value,
    address:{
      ...prevInput.address,
      [name]:value
    }

    }));
    
     
      }

    // const handleAddressChange=(e)=>{
    //   const name = e.target.name;
    //   const value = e.target.value;
    //   setInput({
    //     ...input,[name]:value
    //   })
    //   console.log(input)
      
    // }


    const validate = (values)=>{
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(!values.name){
        errors.name = "Name is Required";

      }
      if(!values.email){
        errors.email = "Email is Required";

      }else if(!regex.test(values.email)){
        errors.email = "This is not a valid email format!"
      }
      if(!values.phoneNumber){
        errors.phoneNumber = "PhoneNumber is Required";
      }else if(values.phoneNumber<7){
        errors.phoneNumber = "Phone number should not be less than 7"
      }
      
      return errors;

    };
    console.log(input);
  return (
    <form  onSubmit={submitData} className='flex flex-wrap'>
      <div className='w-full px-5'>
        <Input
        label = "Name:"
        placeholder ="Enter your name"
        className =""
        name = "name"
        value ={input.name}
        onChange ={handleChange}
        />
        <p>{formError.name}</p>
        <Input
        label = "Email:"
        placeholder ="Enter your email"
        name= "email"
        value ={input.email}
        onChange ={handleChange}
        />
        <p>{formError.email}</p>
        <Input
        label = "PhoneNumber:"
        placeholder ="Enter your phonenumber"
        name = "phoneNumber"
        value ={input.phone}
        onChange ={handleChange}
        />
        <Input
        label = " Date of Birth:"
        placeholder ="Enter your date of birth"
        type= "date"
        name="dateofBirth"
        value ={input.dateofBirth}
        onChange ={handleChange}
        />
        
        
        <Input
        label = " City:"
        placeholder ="Enter your city"
        name = "city"
        value ={input.address.city}
        onChange ={handleChange}
        />
        <Input
        label = " District:"
        placeholder ="Enter your district"
        name = "district"
        value ={input.address.district}
        onChange ={handleChange}
        />
       <div className='flex w-6/6 mb-4'>
       
       <Select
            options={["Provience1","Provience2","Provience3","Provience4","Provience5","Provience6","Provience7"]}
            label ="Provience"
            name = "provience"
            className =" ml- "
            value = {input.address.provience}
            onChange = {handleChange}
       />
       <Select
            options={["Nepal","India","China","America"]}
            label ="Country"
           
            name= "country"
            className ="ml-3  "
            value ={input.address.country}
            onChange = {handleChange}
       />
       </div>
      
      <button className='p-2 m-4 font-bold bg-blue-500 text-white rounded-lg w-1/2' type="submit" >Add</button> 
      </div>

    </form>
  )
}

export default AddDetails