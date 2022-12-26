
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/store/store'
import { initFolder, deleteFileAndRefesh } from '@/store/filesReducer'
import { useParams } from 'react-router-dom'
import { DelBut, ViewFile, Container, File, DeleteFile } from '@/components/UiComponents'

export const FileList = () => {
    const dispatch = useAppDispatch()
    const { folderId } = useParams<{ folderId: string }>()
    const viewfiles = useSelector((state: RootState) => state.file.value)

    React.useEffect(() => {
        dispatch(initFolder(folderId))
    }, [])
    // const [arrFolder, setArrFolder] = React.useState<number[] | string[]>([])

    return (
        <div>
            <Container>
                {viewfiles.map(({ filename, id }) => {
                    return (
                        <ViewFile key={id}>
                            <File >
                                {filename}
                            </File>
                            <DeleteFile>
                                <DelBut onClick={() => dispatch(deleteFileAndRefesh(id))}>x</DelBut>
                            </DeleteFile>
                        </ViewFile>
                    )
                })
                }
            </Container>
        </div>

    )
}
