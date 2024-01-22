import { useNavigate } from "react-router-dom";

function Voltahome(){

    const navgaite = useNavigate();

    const handlehHome = () =>{
        return navgaite("/")
    }

    return(
        <div>
            <button onClick={handlehHome}>Home</button>
        </div>
    )
}

export default Voltahome;