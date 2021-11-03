import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

const Calander = () => {
    const [value, setValue] = React.useState(new Date());
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                displayStaticWrapperAs="desktop"
                openTo="year"
                value={value}
                onChange={(newValue) => {
                setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
      </LocalizationProvider>
    );
};

export default Calander;