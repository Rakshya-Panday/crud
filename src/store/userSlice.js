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
    userDetails: JSON.parse(localStorage.getItem("userDetails")) || [],
    userDetail:{},

   
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
           state.userDetails.push(detail)

           localStorage.setItem("userDetails",JSON.stringify(state.userDetails));
        },
        updateDetails :(state,action )=>{
            // console.log('update Details',action.payload);
            const {id,input} = action.payload;
             const updatedData = state.userDetails.map((item)=> item.id === id ?input:item
             );
            //  console.log("updated",updatedData);
             state.userDetails = updatedData;
             localStorage.setItem('userDetails',JSON.stringify(state.userDetails));
            

        },

        removeDetails:(state,action)=>{
            state.userDetails = state.userDetails.filter((detail)=>detail.id!=action.payload)
            localStorage.setItem("userDetails",JSON.stringify(state.userDetails));

        },
        getDataById:(state,action)=>{

            const findData = state.userDetails?.find((item)=>item.id===action.payload);
            console.log(findData);

            state.userDetail = findData;
            
        }
    }
})

export const {addDetails,updateDetails,getDataById,removeDetails,getUser} = userSlice.actions;
export default userSlice.reducer;