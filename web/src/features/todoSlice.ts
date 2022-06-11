import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from 'uuid';

export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

const todoSlice = createSlice({
    name: "todos",
    initialState: [] as Todo[],
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.push({
                id: v4(),
                text: action.payload,
                completed: false
            })
        },
        remove: (state, action: PayloadAction<string>) => {
            return state.filter(todo => todo.id !== action.payload)
        }
    }
})

export default todoSlice.reducer;
export const { addTodo, remove } = todoSlice.actions;