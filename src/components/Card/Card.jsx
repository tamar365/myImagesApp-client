import React from "react";
import { CardMedia } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import "./Card.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Card({ image, pickedImage }) {
  const classes = useStyles();

  return (
    <div key={image.id} className="theCard">
      <CardMedia
        value={image}
        image={image.previewURL}
        className={classes.media}
        onClick={() => pickedImage(image.id)}
      />
    </div>
  );
}
