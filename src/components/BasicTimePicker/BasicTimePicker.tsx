import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

interface BasicTimePickerProps {
    label?: string;
    value: Date | null;
    setValue: any
}

export const BasicTimePicker: React.FC<BasicTimePickerProps> = ({ value, setValue, label }) => {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
                label={label || 'time'}
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}