import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddCar(props) {
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        fuel: '',
        modelYear: '',
        price: ''
    })
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = event => {
        setCar({...car, [event.target.name]: event.target.value})
    }

    const handleSave = () => {
        console.log(car)
        props.saveCar(car)
        setOpen(false)
    }

    

    return (
        <div>
            <Button onClick={handleClickOpen}>Add new car</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                
            >
                <DialogTitle>
                    New Car
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        id="brand"
                        name="brand"
                        label="Brand"
                        value={car.brand}
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        
                    />
                    <TextField

                        required
                        id="model"
                        name="model"
                        label="Model"
                        value={car.model}
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField

                        required
                        id="color"
                        name="color"
                        label="Color"
                        value={car.color}
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField

                        required
                        id="fuel"
                        name="fuel"
                        label="Fuel"
                        value={car.fuel}
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField

                        required
                        id="modelYear"
                        name="modelYear"
                        label="Year"
                        value={car.modelYear}
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField

                        required
                        id="price"
                        name="price"
                        label="Price"
                        value={car.price}
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
