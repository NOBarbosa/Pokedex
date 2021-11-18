// libraries/frameworks
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// components

// variables
import useStyles from './style';
import stylesColors from '../../styles/colors';

function Pokecard({ name, id, type, image }) {
  const classes = useStyles();
  const color = stylesColors.primary[type];

  return (
    <Card className={classes.root} style={{ backgroundColor: color }}>
      <Typography variant="h6">
        <strong className={classes.typograph}>#0{id}</strong>
      </Typography>
      <CardMedia className={classes.media} image={image} title={type} />
      <CardContent>
        <Typography variant="h6" component="p">
          <strong>
            Name: {name} <br></br>
            Type: {type}
          </strong>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Pokecard;
