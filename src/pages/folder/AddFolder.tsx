import { createFolderAndFetch } from '@/store/foldersReducer'
import { useAppDispatch } from '@/store/store'
import { AddBut, HeaderDiv, Input } from '@/components/UiComponents'
import React from 'react'


export const AddFolder = () => {
    const [text, setText] = React.useState('')
    const dispatch = useAppDispatch()
    const addFolder = () => {
        text.trim().length > 0
            ? dispatch(createFolderAndFetch(text))
            : setText('')
        setText('')

    }
    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            addFolder()
        }
    }
    return (

        <HeaderDiv>
            <Input
                onKeyDown={handleKeyDown}
                value={text}
                onChange={((e) => setText(e.target.value))}
            />
            <AddBut
                onClick={() => addFolder()}
            >
                add folder
            </AddBut>
        </HeaderDiv >
    )
}