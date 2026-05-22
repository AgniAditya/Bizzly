import { createSlice } from '@reduxjs/toolkit'
import { Message } from '../../types/Messages'

const messagesSlice = createSlice({
    name: 'messages',
    initialState: { 
        messages: [] as Message[] 
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload)
        }
    }
})

export const { addMessage } = messagesSlice.actions
export default messagesSlice.reducer