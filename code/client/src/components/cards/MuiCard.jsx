import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.src}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.about}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          From {props.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: "#F87171" }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
