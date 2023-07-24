import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:{
        todoItems:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.todoItems.push(action.payload);
        },
        removeItem: (state,action)=>{
            state.todoItems.pop();
        },
        clearList: (state,action)=>{
            state.todoItems.length=0;
        }
    }
})

export const {addItem,removeItem,clearList} = todoSlice.actions;

export default todoSlice.reducer;