import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    
   
    // // justifyContent: 'center'
  },
  media: {
    height: 'auto',
    paddingTop: '65.25%', // 16:9
    paddingBottom: '30.25%'
  }
  }
));

export default function Pokecard({name, id, type, image}) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
        <Typography>
          #0{id}
        </Typography>
      <CardMedia
        className={classes.media}
        image={image}
        title={type}
      />
      <CardContent>
        <Typography variant="body2" color="primary" component="p"

        >
          {name} <br></br>
          {type}
        </Typography>
      </CardContent>
      
      
    </Card>
  );
}







// import './style.css';
// const Pokecard = ({id, name, type, image}) =>{
//     return(
//         <div className="pokecard">
//             <div className="number">
//                 <small>#0{id}</small>
//             </div>
//             <img  src={image} alt={name}/>
//             <div className="detail">
//                 <h3>{name}</h3>
//                 <small>Type: {type}</small>
//             </div>
//         </div>
//     )
// };

// export default Pokecard;