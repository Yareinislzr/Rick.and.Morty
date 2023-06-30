import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup({ gender, setGender }) {
  return (
    <FormControl>
      <FormLabel
        style={{ fontWeight: "600", fontSize: "1.5rem" }}
        id="demo-radio-buttons-group-label"
      >
        Gender
      </FormLabel>
      <RadioGroup
        value={gender}
        onChange={(e) => {
          setGender(e.target.value);
        }}
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="unknown" control={<Radio />} label="Unknown" />
      </RadioGroup>
    </FormControl>
  );
}
