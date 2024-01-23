import { useNavigate } from "react-router-dom";
import "./voltahome.css";

function Voltahome(){

    const navgaite = useNavigate();

    const handlehHome = () =>{
        return navgaite("/")
    }

    return(
        <div>
            <button className="btn1" onClick={handlehHome}>Home</button>
        </div>
    )
}

export default Voltahome;