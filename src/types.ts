export type Folder = {
    id: number,
    name: string
}
export type File = {
    id: number,
    filename: string,
    size: number,
    createdAt: string,
    updatedAt: string,
}
export type Filein = {
    id: string | number,
    file: Blob
}