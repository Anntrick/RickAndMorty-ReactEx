import { useEffect } from "react";

function CharacterCard(props) {
    useEffect(() => {
       // console.log("hols")   
    }, [])

   return (
      <div className="CharacterCard">
        <img src={props.data.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.data.name}</h5>
            <p>{props.data.gender}</p>
            <button onClick={()=> props.func("hola")}>Hola</button>
        </div>
      </div>
   );
}

export default CharacterCard;
