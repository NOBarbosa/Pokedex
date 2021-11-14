import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from './style';


export default function Pokecard({name, id, type, image}) {
  const classes = useStyles();
  let color = ''
    if(type === 'grass'){
        color = '#e2f9e1'
    }
    if(type === 'fire'){
        color = '#fbe3df'
    }
    if(type === 'water'){
        color = '#e0f1fd'
    }
    if(type === 'fairy'){
        color = '#ffc0cbdc'
    }
    if(type === 'normal'){
        color = '#f4f4f4'
    }
    if(type === 'bug'){
        color = '#f6d6a7'
    }
    if(type === 'poison'){
        color = '#e0a7f6'
    }
    
    if(type === 'electric'){
        color = '#ffffa1'
    }
    if(type === 'ghost'){
        color = '#f7f7f7'
    }
    if(type === 'rock'){
        color = '#945151'
    }
    if(type === 'ice'){
        color = '#26dbeb'
    }
    if(type === 'fighting'){
        color = '#eb6826'
    }
    if(type === 'psychic'){
        color = '#db4dcf'
    }
    if(type === 'ground'){
        color = '#b5835c'
    }
    if(type === 'dragon'){
        color = '#3218d9'
    }
    
  return (
    <Card className={classes.root} style={{backgroundColor: color}}>
        <Typography   variant="h6" >
          <strong className={classes.typograph}>
            #0{id}
          </strong>
        </Typography>
      <CardMedia
        className={classes.media}
        image={image}
        title={type}
      />
      <CardContent>
        <Typography variant="h6" component="p"
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