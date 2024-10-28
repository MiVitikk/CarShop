import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { Button } from "@mui/material";

import "./CarList.css";
import AddCar from "./AddCar";
import EditCar from "./EditCar";


import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function CarList() {
    const [cars, setCars] = useState([]);
    const [columnDefs, setColumnDefs] = useState([
        { field: 'brand' },
        { field: 'model' },
        { field: 'color' },
        { field: 'fuel' },
        { field: 'modelYear',
            headerName: 'Year'
         },
        { field: 'price' },
        {
            field: '_links.self.href',
            headerName: '',
            sortable: false,
            filter: false,
            cellRenderer: params => <Button onClick={() => deleteCar(params.data._links.self.href)}>Delete</Button>
        },
        {
            field: '_links.self.href',
            headerName: '',
            sortable: false,
            filter: false,
            cellRenderer: params => <EditCar updateCar={updateCar} car={params.data}/>
        },
    ])

    

    const defaulColDef = {
        sortable: true,
        filter: true
    }
    const autoSizeStrategy = {
        type: 'fitCellContents',
        defaultMinWidth: 100,

    };

    const fetchCars = async () => {
        try {
            const response = await fetch('https://car-rest-service-carshop.2.rahtiapp.fi/cars')
            const data = await response.json();
            setCars(data._embedded.cars);
            console.log(data)
        }

        catch (e) {
            console.error(e)
        };

    };

    const deleteCar = async (url) => {
        const options = {
            method: 'DELETE'
        }

        try {
            if (confirm("Do you want to delete car?")) {
                const response = await fetch(url, options);
                fetchCars();
            }

        } catch (e) {
            console.error(e);
        }

    }

    const saveCar = async (car) => {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        }
        try {
            const response = await fetch('https://car-rest-service-carshop.2.rahtiapp.fi/cars', options)
            const data = await response.json();
        }
        catch (e) {
            console.error(e)
        }
        fetchCars();
    };

    const updateCar = (car, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(car)
        })
        .then(res => fetchCars())
        .catch(err => console.error(err))
    }

    useEffect(() => fetchCars, []);

    return (
        <div className="CarList">
            <AddCar saveCar={saveCar} />
            <div className="ag-theme-material" style={{ width: "100%", height: 800 }}>
                <AgGridReact
                    rowData={cars}
                    columnDefs={columnDefs}
                    defaultColDef={defaulColDef}
                    autoSizeStratey={autoSizeStrategy}
                />
            </div>
        </div>
    )
}

export default CarList