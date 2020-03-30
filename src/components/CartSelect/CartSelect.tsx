import React, { FC, useState, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


interface Props {
  onSelect: (event: ChangeEvent<{ name?: string; value: string|unknown }>) => void;
  id: string;
}

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const CartSelect: FC<Props> = ({ onSelect, id }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState<string|unknown>('1');

  const handleChange = (event: ChangeEvent<{ name?: string; value: string|unknown }>) => {
    setQuantity(event.target.value);
    onSelect(event);
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <Select
          name={id}
          defaultValue="1"
          labelId="demo-simple-select-filled-label"
          value={quantity}
          onChange={handleChange}
        >
          <MenuItem selected value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="6">6</MenuItem>
          <MenuItem value="7">7</MenuItem>
          <MenuItem value="8">8</MenuItem>
          <MenuItem value="9">9</MenuItem>
          <MenuItem value="10">10</MenuItem>
          <MenuItem value="11">11</MenuItem>
          <MenuItem value="12">12</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
