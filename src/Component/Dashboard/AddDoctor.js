import { Button, Container, Input, TextField } from '@material-ui/core';
import React from 'react';

const AddDoctor = () => {
    return (
        <div>
            <Container>
                <form>
                <TextField
            id="standard-number"
            label="Number"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            variant="standard"
            />

                    <div>
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="contained" component="span">
                            Doctor Img
                        </Button>
                    </div>
                </form>
            </Container>
            <h1>Add doctor section</h1>
        </div>
    );
};

export default AddDoctor;