import 'date-fns';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useSelector, useDispatch } from 'react-redux';
import { setDate } from '../app_state/reducers/services/serviceActions';

export default function DatePickerDialog() {
  // The first commit of Material-UI

  const today = new Date();
  const initialDate = useSelector((state) => state.serviceReducer.selectedDate);
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const dispatch = useDispatch();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    dispatch(setDate(date));
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label="Date"
        fullWidth
        format="dd/MM/yyyy"
        maxDate={today}
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />

    </MuiPickersUtilsProvider>
  );
}
