import { File, Filein } from "@/types"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { AppDispatch, RootState } from "./store"

export const initFolder = (folderId: string) => async (dispatch: AppDispatch) => {
    dispatch(setupFolderId(folderId))
    await dispatch(fetchFiles(folderId))
}

export const addFileAndRefresh = (file: Blob) => async (dispatch: AppDispatch, getStore: () => RootState) => {
    await dispatch(addFile({ id: getStore().file.folderId, file }))
    await dispatch(fetchFiles(getStore().file.folderId))
}
export const deleteFileAndRefesh = (id: number) => async (dispatch: AppDispatch, getStore: () => RootState) => {
    await dispatch(deleteFile(id))
    await dispatch(fetchFiles(getStore().file.folderId))
}

export const fetchFiles = createAsyncThunk<any, string | number>(
    'files/fetch',
    async (id) => {
        const { data } = await axios.get(`/api/folder/${id}`)
        return data
    }
)
export const addFile = createAsyncThunk<void, Filein>(
    'files/post',
    async ({ id, file }) => {
        const body = new FormData()
        body.append('file', file)
        await axios.post(`/api/folder/${id}`, body)
    }
)
export const deleteFile = createAsyncThunk<any, number>(
    'files/delete',
    async (id) => {
        const { data } = await axios.delete(`/api/file/${id}`)
        return data
    }
)


const initialState = {
    value: [] as File[],
    folderId: 0,
}
const fileSlice = createSlice({
    name: 'file',
    initialState,
    reducers: {
        setupFolderId: (state, { payload }) => {
            state.folderId = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFiles.fulfilled,
            (state, { payload }) => {
                state.value = payload
            })
    }
})

export const { setupFolderId } = fileSlice.actions
export default fileSlice.reducer