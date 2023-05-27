
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';


const ProductDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.sku}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.name}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.brand}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.price}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.description}</p>
    const ratingTemplate5 = (rowData, { rowIndex }) => <Rating stars={5} style={{width:"20rem"}} value={rowData.rating} cancel={false}  />
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.stock}</p>
    const tickTemplate7 = (rowData, { rowIndex }) => <i className={`pi ${rowData.availability?"pi-check": "pi-times"}`}  ></i>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="sku" header="SKU" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="name" header="Name" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="brand" header="Brand" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="price" header="Price" body={pTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="description" header="Description" body={pTemplate4} sortable style={{ minWidth: "8rem" }} />
            <Column field="rating" header="Rating" body={ratingTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="stock" header="Stock" body={pTemplate6} sortable style={{ minWidth: "8rem" }} />
            <Column field="availability" header="availability" body={tickTemplate7} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ProductDataTable;