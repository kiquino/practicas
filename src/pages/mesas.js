import react from "react";
import { useParams } from "react-router-dom";
const Mesas =() =>{
    const {id} = useParams();
return(
    
    <div className="init">
        <img src="logo.png" alt=""/>
        <h1>Mesa {id}</h1>
    </div>
)
}
export default Mesas;