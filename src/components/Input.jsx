import React,{useId} from 'react'
const Input = React.forwardRef(function Input({
    label,
    type="text",
    className = "",
    ...props

},ref){
    const id = useId()
  return (
    <div className='w-full flex mb-5 '>
     {label && <label
     className='flex flex-wrap   w-1/3 mb-1 text-black font-semibold pl-1'
     > 
     {label}
        </label>}
        <input 
        type={type}
        className={` ml-7 px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border-gray-200 w-full${className}`}
        ref = {ref}
        {...props}
        id = {id}
        />
    </div>
  )
})

export default Input
