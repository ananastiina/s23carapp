import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";


export default function EditCar(props) {

    // Statet
    const [car, SetCar] = useState({ brand: '', model: '' });
    const [open, setOpen] = useState(false); // is dialog open

    //functions
    const handleClose = (event, reason) => { //close dialog
        if (reason != 'backdropClick')
            setOpen(false);
    }

    const handleInputChanged = (event) => {
        SetCar({ ...car, [event.target.name]: event.target.value });
    }

    const handleSave = () => {
        props.updateCar(car); // Todo: updatecar
        setOpen(false); // suljetaan dialogi-ikkuna
    }

    // return, jossa...
    // Add-button
    // dialog (formi)
    return (
        <>

            <Button
                onClick={() => setOpen(true)}>Muokkaa</Button>
            <Dialog
                open={open}
                onClose={handleClose}>
                <DialogTitle>Muokkaa autoa</DialogTitle>
                <DialogContent>
                    <TextField
                        label='Merkki'
                        name='brand'
                        value={car.brand}
                        onChange={handleInputChanged}>
                    </TextField>
                    <TextField
                        label='Malli'
                        name='model'
                        value={car.model}
                        onChange={handleInputChanged}>
                    </TextField>
                    <TextField
                        label='Väri'
                        name='color'
                        value={car.color}
                        onChange={handleInputChanged}>
                    </TextField>
                    <TextField
                        label='Polttoaine'
                        name='fuel'
                        value={car.fuel}
                        onChange={handleInputChanged}>
                    </TextField>
                    <TextField
                        label='Vuosimalle'
                        name='year'
                        value={car.year}
                        onChange={handleInputChanged}>
                    </TextField>
                    <TextField
                        label='Hinta'
                        name='price'
                        value={car.price}
                        onChange={handleInputChanged}>
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}>Sulje</Button>
                    <Button
                        onClick={handleSave}>Tallenna</Button>
                </DialogActions>
            </Dialog>
        </>

    );
}