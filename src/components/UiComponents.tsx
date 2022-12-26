import styled from "styled-components"

export const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    align-content: space-evenly;
    justify-content:space-between;
    font-size: 20px;
`

export const DelBut = styled.button`
    border-radius: 27px;
    border:5px;
    color:#ef3333;
    background-color:rgba(205, 214, 219, 0);
    font-size:30px;
`
export const P = styled.div`
    width:150px;
    height:150px;
    background-size:100px,100px;
    background-image: url(/src/Img/Folder.png);
    background-repeat: no-repeat;
`

export const HeaderDiv = styled.div`
    display:flex;
    justify-content: center;


`
export const DeleteFolder = styled.div`
    display:flex;
    justify-content:center; 
    width: 297px;
    margin:-57px;
    display:flex;
    justify-content:center;
    margin-right:200px;
`

export const Input = styled.input`
    width:300px;
    height:38px;
    border-color:#00f7ffdb;
    border-radius:5px;
    font-size:27px;
    margin:10px;
    color:#38abe5dc;


`
export const AddBut = styled.button`
    border-radius:5px;
    border-color:#00f7ffdb;
    background-color:white;
    margin:10px;
    color:#38abe5dc;
    height:43px;
    :hover{
        background-color:#1ae4ebbe;
        color:white;
    }
`
export const FolderName = styled.div`
    color:blue;
    margin-top:40px;
`
export const ViewFile = styled.div`
    background-image:url(/src/Img/File.png);
    width:200px;
    height:200px; 
    background-size:200px,200px;
    background-repeat: no-repeat;
    margin:50px;
`

export const File = styled.div`
    font-size:20px;
    margin-top:90px;
    margin-left:10px;
    color:white;
    word-break: break-all;
`
export const DeleteFile = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-top:-115px;
    margin-right: -5px;

`
export const FileInput = styled.input`
    border-radius:5px;
    font-size:27px;
    background-size:100px,100px;
`
export const AddFileButton = styled.button`
     border-radius:5px;
    border-color:#00f7ffdb;
    background-color:white;
    color:#38abe5dc;
    height:38px;
    width:70px;

:hover{
    background-color:#1ae4ebbe;
    color:white;
}

`
export const CartmanDiv = styled.div`
    background-size: auto;
    background-repeat:no-repeat;
`