import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import SelectVariants from '../../components/SelectVariants';
import ChartView from '../../components/ChartView';

const dataTemplate = {
  name: 'Moisture',
  type: 'area',
  unit: '%',
  data: [
    44, 55, 41, 167, 22, 43, 121, 41, 56, 27, 143, 124, 224, 44, 155, 41, 67, 122, 143, 21, 111, 56, 127,
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
const Moisture  = (props) => {
  const theme = useTheme();
  const [selectDate, setSelectDate] = useState('2017-01-01');
  const [timeRange, setTimeRange] = useState(1);
   
   
  const renderActions = (
    <div>
      <SelectVariants
        value={timeRange} 
        label="Range"
        handleChange={(event) => {setTimeRange(event.target.value)}}
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
        <ChartView
          action={renderActions}
          data={dataTemplate}
          title="Moisture"
          subheader = "Range per 5 second (%)"
          color={theme.palette.chart.violet[0]} 
        />
      </Grid> 
    </>
  );
};

export default Moisture;