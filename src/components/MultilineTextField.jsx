import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const CustomTextField = withStyles({
  root: {
    '& .MuiFormLabel-root.Mui-focused': {
      color: "#45adb7"
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: "#45adb7",
    }
  },
})(TextField);


export default function MultilineTextField(props) {

  const { message, handleChange } = props


  return (
    // <form className={classes.root} noValidate autoComplete="off">
    <div>
      <CustomTextField
        id="filled-multiline-flexible"
        label="Your Message"
        multiline
        rows={5}
        fullWidth
        defaultValue={false}
        value={message}
        onChange={handleChange}
        spellCheck={true}
        variant="filled"
      />
    </div>
    // {/* </form> */}
  );
}