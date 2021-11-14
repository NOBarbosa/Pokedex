import './style.css';
const Pokecard = ({id, name, type, image}) =>{
    return(
        <div className="pokecard">
            <div className="number">
                <small>#0{id}</small>
            </div>
            <img  src={image} alt={name}/>
            <div className="detail">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
};

export default Pokecard;