import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
type todoType={
    id:string,
    text:string
}
const initialState:todoType[] = [];


const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        add:(state,action:PayloadAction<string>)=>{
            const newTodo:any = {id:uuidv4(),text:action.payload}
            state.push(newTodo)
        },
        remove:(state,action:PayloadAction<string>)=>{
            return state.filter(item=>item.id !== action.payload);
        }
    }
})

export default todoSlice.reducer;
export const {add,remove} = todoSlice.actions
