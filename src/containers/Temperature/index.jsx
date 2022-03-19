import React, { useState } from 'react';
import { Grid } from '@mui/material';
import ChartView from '../../components/ChartView';
import TextField from '@mui/material/TextField';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import SelectVariants from '../../components/SelectVariants';
const Temperature = (props) => {
  const [selectDate, setSelectDate] = useState('2017-01-01');
  const [timeRange, setTimeRange] = useState(1);
  const dataTemplate = {
    name: 'Temperature',
    type: 'area',
    unit: '°C',
    data: [
      44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 24, 24, 44, 55, 41, 67, 22, 43, 21, 41, 56, 27,
      43, 24, 24
    ],
    labels: [
      '02:03:03',
      '02:03:08',
      '02:03:13',
      '02:03:15',
      '02:03:20',
      '02:03:25',
      '02:03:30',
      '02:03:35',
      '02:03:40',
      '02:03:45',
      '02:03:50',
      '02:03:45',
      '02:03:50',
      '02:03:03',
      '02:03:08',
      '02:03:13',
      '02:03:15',
      '02:03:20',
      '02:03:25',
      '02:03:30',
      '02:03:35',
      '02:03:40',
      '02:03:45',
      '02:03:50',
      '02:03:45',
      '02:03:50'
    ]
  };

  const renderActions = (
    <div>
      <SelectVariants
        value={timeRange}
        label="Range"
        handleChange={(event) => {
          setTimeRange(event.target.value);
        }}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Select Date"
          value={selectDate}
          minDate={new Date('2017-01-01')}
          onChange={(newValue) => {
            setSelectDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
  return (
    <>
      <Grid item xs={12} md={12} lg={12}>
        <ChartView action={renderActions} data={dataTemplate} />
      </Grid> 
    </>
  );
};

export default Temperature;
