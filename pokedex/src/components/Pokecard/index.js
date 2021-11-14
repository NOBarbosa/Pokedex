import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Color from 'color';
import { Backdrop } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    actionArea: {
        borderRadius: 16,
        transition: '0.2s',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      },
  root: {
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    cursor: 'pointer',
    '&:hover': {
        boxShadow: `0 6px 12px 0 ${Color(`gray`)
          .rotate(-12)
          .darken(0.2)
          .fade(0.5)}`,
      },      
  },
  
  
  media: {
    height: 'auto',
    paddingTop: '65.25%', // 16:9
    paddingBottom: '30.25%'
  }
  
  }));

export default function Pokecard({name, id, type, image}) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root }  >
        <Typography>
          <strong>
            #0{id}
          </strong>
        </Typography>
      <CardMedia
        className={classes.media}
        image={image}
        title={type}
      />
      <CardContent>
        <Typography variant="body2" component="p"
        >
            <strong>
                Name: {name} <br></br>
                Type: {type}
            </strong>
        </Typography>
      </CardContent>
      
      
    </Card>
  );
}








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