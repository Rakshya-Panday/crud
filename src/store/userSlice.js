import {createSlice , nanoid} from '@reduxjs/toolkit'

// {
//     id :'',
//     name :'',
//     email :'',
//     phoneNumber: '',
//     dateofBirth :'',
//     address :{
//     city :'',
//     district: '',
//     provience:'',
//     country:'',
//       }
//     }
const initialState = {
    userDetails: JSON.parse(localStorage.getItem("userDetails")) || []
}

export const userSlice = createSlice({
    name :'userDetail',
    initialState,
    reducers :{
        addDetails :(state,action)=>{
           const detail ={
            id: nanoid(),
            ...action.payload
           }
        //    console.log("called ",detail);
           state.userDetails.push(detail)

           localStorage.setItem("userDetails",JSON.stringify(state.userDetails));
        },
        updateDetails :(state,action)=>{
            
            

           localStorage.setItem("userDetails",JSON.stringify(state.userDetails));
            

        },

        removeDetails:(state,action)=>{
            state.userDetails = state.userDetails.filter((detail)=>detail.id!=action.payload)
            localStorage.setItem("userDetails",JSON.stringify(state.userDetails));

        }
    }
})

export const {addDetails,updateDetails,removeDetails} = userSlice.actions;
export default userSlice.reducer;