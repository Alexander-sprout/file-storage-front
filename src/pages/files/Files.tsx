import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AddFile } from './AddFile'
import { useAppDispatch } from '../../store/store'
import { HeaderDiv } from '../../components/UiComponents'
import { FileList } from './FileList'


export const Files = () => {
    const dispatch = useAppDispatch()
    const { folderId } = useParams<{ folderId: string }>()

    return (
        <div>
            <HeaderDiv>
                <AddFile />
            </HeaderDiv>
            <FileList />
        </div>
    )

}
