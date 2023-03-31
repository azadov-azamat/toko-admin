import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

function getFullName(params: GridValueGetterParams) {
    return `${params.row.firstName || ''} ${params.row.lastName || ''}`;
}

const columns: GridColDef[] = [
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'fullName',
        headerName: 'Full name',
        width: 160,
        valueGetter: getFullName,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
    { id: 4, lastName: 'Stark', firstName: 'Arya' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
];

function ProductList(): JSX.Element {
    return (
        // <div className={"w-full h-auto"}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                />
            </div>
        // </div>
    );
}

export default ProductList;