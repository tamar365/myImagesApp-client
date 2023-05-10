import "./Categories.css";
import React from "react";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Categories({ imagesByCategories }) {
  //the most of the component from MUI - usually the states and the methods should be in the father app or/and in the store 
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setCategory(event.target.value);
    imagesByCategories(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="categories-container">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">
          CATEGORIES
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category}
          label="CATEGORIES"
          onChange={handleChange}
        >
          <MenuItem value="food">FOOD</MenuItem>
          <MenuItem value="sport">SPORT</MenuItem>
          <MenuItem value="technology">TECHNOLOGY</MenuItem>
          <MenuItem value="health">HEALTH</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
