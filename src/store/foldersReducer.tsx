
import { Folder } from "@/types"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BlockMapBuilder } from "draft-js"
import { AppDispatch } from "./store"


export const fetchFolders = createAsyncThunk(
    "folder/fetch",
    async () => {
        const { data } = await axios.get('/api/folder')
        return data
    }
)

export const createFolderAndFetch = (name: string) => async (dispatch: AppDispatch) => {
    await dispatch(addFolder(name))
    await dispatch(fetchFolders())
}

export const deleteFolderAndFetch = (id: number) => async (dispatch: AppDispatch) => {
    await dispatch(deleteFolder(id))
    await dispatch(fetchFolders())
}

export const addFolder = createAsyncThunk<any, string>(
    "folder/post",
    async (name) => {
        const { data } = await axios.post('/api/folder', { folderName: name })
        return data
    })

export const deleteFolder = createAsyncThunk<any, number>(
    "folder/delete",
    async (id) => {
        const { data } = await axios.delete(`/api/folder/${id}`)
        return data

    }
)

const initialState = {
    value: [] as Folder[]
}
const folderSlice = createSlice({
    name: 'folder',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFolders.fulfilled,
            (state, { payload }) => {
                state.value = payload
            })
    }


})

export const { } = folderSlice.actions
export default folderSlice.reducer