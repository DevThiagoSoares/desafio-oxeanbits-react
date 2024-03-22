export interface Columns {
    field: string,
    title: string,
    width?: string
}

export interface TableProps {
    rows: any[]
    columns: Columns[],

}