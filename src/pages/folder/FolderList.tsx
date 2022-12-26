import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { deleteFolderAndFetch, fetchFolders } from '@/store/foldersReducer'
import { RootState, store, useAppDispatch } from '@/store/store'
import { Link, Switch } from 'react-router-dom'
import { Folder } from '../../types'
import { CartmanStyle, DelBut, DeleteFolder, Container, FolderName, P } from '../../components/UiComponents'

export const FolderList = () => {
    const viewfolders = useSelector((state: RootState) => state.folder.value)
    const dispatch = useAppDispatch()
    React.useEffect(() => {
        dispatch(fetchFolders())
    }, [])

    return (
        <Container>
            {viewfolders.map(({ name, id }: Folder) => {
                return (
                    <P key={id} >
                        <Link to={`/folder/${id}`} style={{ textDecoration: 'none' }}>
                            <FolderName>
                                {name}
                            </FolderName>

                        </Link>
                        <DeleteFolder>
                            <DelBut onClick={() => dispatch(deleteFolderAndFetch(id))}>x</DelBut>
                        </DeleteFolder>
                    </P>
                )
            })}
        </Container>
    )
}

