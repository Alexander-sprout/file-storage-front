import React from 'react'
import { addFileAndRefresh } from '../../store/filesReducer'
import { useAppDispatch } from '../../store/store'
import { FileInput, AddFileButton } from '../../components/UiComponents'

export const AddFile = () => {
    const dispatch = useAppDispatch()
    const [file, setFile] = React.useState<Blob | null>(null)
    const postFile = () => {
        if (file) {
            dispatch(addFileAndRefresh(file))
        }
    }
    return (
        <div  >
            <FileInput onChange={(e) => setFile(e.target.files && e.target.files[0])} type="file" />
            <AddFileButton onClick={() => postFile()}>add file</AddFileButton>
        </div >
    )
}