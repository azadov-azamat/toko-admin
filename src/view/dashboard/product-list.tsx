import React from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {dataVar} from "../../config/mockdata";

const columns: GridColDef[] = [
    {field: 'id', headerName: 'id', width: 100},
    {field: 'sku', headerName: 'sku', width: 130},
    {field: 'supplier', headerName: 'supplier', width: 130},
    {field: 'barcode', headerName: 'barcode', width: 160},
    {field: 'lastUpdateTime', headerName: 'lastUpdateTime', width: 160}
];

function ProductList(): JSX.Element {
    return (
        <div className={"w-full h-auto"}>
            <div style={{height: 600, width: '100%'}}>
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