import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextField() {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    // <form className={classes.root} noValidate autoComplete="off">
    <div>
      <TextField
        id="filled-multiline-flexible"
        label="Your Message"
        multiline
        rows={5}
        fullWidth
        defaultValue={false}
        value={value}
        onChange={handleChange}
        spellCheck={true}
        variant="filled"
      />
    </div>
    // {/* </form> */}
  );
}