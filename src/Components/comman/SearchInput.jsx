// import searchIcon from '../../assists/searchIcon.png';
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import classes from "../../styles/SearchInput.module.css";

const options = ['Option 1', 'Option 2'];

export default function CustomInputAutocomplete() {
  return (
    <label>
      <Autocomplete
       
        id="custom-input-demo"
        options={options}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>

            <input type="text" {...params.inputProps}
               className={classes.inputSearch}
              //  style={{    backgroundImage : `url(${searchIcon})`,}}
             />

          </div>
        )}
      />
    </label>
  );
}



