import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {dataVar} from "../../config/mockdata";

function getFullName(params: GridValueGetterParams) {
    return `${params.row.firstName || ''} ${params.row.lastName || ''}`;
}

function getSupplier(params: GridValueGetterParams) {
    return `${params.row.supplier || ''}`;
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'id', width: 100 },
    { field: 'sku', headerName: 'sku', width: 130 },
    { field: 'supplier', headerName: 'supplier', width: 130, valueGetter: getSupplier },
    {field: 'barcode', headerName: 'barcode', width: 160},
    {field: 'lastUpdateTime', headerName: 'lastUpdateTime', width: 160}
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
        <div className={"w-full h-auto"}>
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={dataVar.items}
                    columns={columns}
                    autoPageSize

                />
            </div>
        </div>
    );
}

export default ProductList;