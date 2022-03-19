import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants(props) {
  const { value, label, handleChange } = props;
  const defaultValues = [
    { value: 1, name: '5 Seconds' },
    { value: 2, name: '1 Minute' },
    { value: 3, name: '1 Hour' }
  ]
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
      <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        onChange={handleChange}
        label={label}
      >
        {defaultValues.map((defaultValue, index) => (
          <MenuItem key={index} value={defaultValue.value}>
            {defaultValue.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
