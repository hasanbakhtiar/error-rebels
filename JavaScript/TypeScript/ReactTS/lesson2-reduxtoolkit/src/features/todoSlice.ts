import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
type todoType={
    id:string,
    text:string
}
const initialState:todoType[] = [
    {
        id:"1",
        text:"test"
    }
];


const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        add:(state,action:PayloadAction<string>)=>{
            const newTodo:any = {id:uuidv4,text:action.payload}
            state.push(newTodo)
        }
    }
})

export default todoSlice.reducer;
export const {add} = todoSlice.actions
