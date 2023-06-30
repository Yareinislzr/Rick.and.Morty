import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup({ status, setStatus }) {
  return (
    <FormControl>
      <FormLabel
        style={{ fontWeight: "600", fontSize: "1.5rem" }}
        id="demo-radio-buttons-group-label"
      >
        Status
      </FormLabel>
      <RadioGroup
        value={status}
        onChange={(e) => {
          setStatus(e.target.value);
        }}
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        <FormControlLabel value="alive" red control={<Radio />} label="Alive" />
        <FormControlLabel value="dead" control={<Radio />} label="Dead" />
        <FormControlLabel value="unknown" control={<Radio />} label="Unknown" />
      </RadioGroup>
    </FormControl>
  );
}
