import { createSlice } from "@reduxjs/toolkit";


const initialpostState={
    posts:[{name:'rop'}],

}
const postSlice=createSlice({

    name:'post',
    initialState:initialpostState,
    reducers:{
           setPost(state,payload){
            // state.posts=state.posts.concat(payload)
           }
    }
})

const postActions=postSlice.actions
export default postSlice.reducer