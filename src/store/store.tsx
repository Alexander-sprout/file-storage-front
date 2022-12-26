import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import folder from './foldersReducer'
import file from './filesReducer'


export const store = configureStore({
    reducer: { folder, file }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 