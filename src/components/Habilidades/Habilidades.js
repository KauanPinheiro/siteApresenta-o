import PhotoExibir from "../imgsExibir/photosExibir"
import LogoReact from "../../img/logoReact3.png";
import LogoJavascript from "../../img/logoJavascript2.png";
import LogoCss from "../../img/logoCss.png";
import LogoHtml from "../../img/logoHtml.jpg";
import LogoSql from "../../img/logoSql.png";
import LogoNode from "../../img/logoNode.png";
import LogoPhp from "../../img/logPhp.png";
import logo from '../../img/MicrosoftTeams-image.png';
import "./habilidades.css";
import Voltahome from "../Voltahome/Voltahome";
import { Link } from "react-router-dom";
function Hablidades(){

    return(

        <div className="paginaFour">

            <div className="containerFour">
            <img src={logo} alt="" className="logo" />
                <h3>Habilidades</h3>
            </div>

                <div className="habilidades1">
                    <Link to='/infoReact'><PhotoExibir nome="React" img={LogoReact}/></Link>
                    <Link to="/infoJS"><PhotoExibir nome="JavaScript" img={LogoJavascript}/></Link>
                    <Link to="/infoCss"><PhotoExibir nome="CSS 3" img={LogoCss}/></Link>
                    <Link to="/infoHtml"><PhotoExibir nome="HTML 5" img={LogoHtml}/></Link>
                    <Link to="/infoDb"><PhotoExibir nome="DB Relacional" img={LogoSql}/></Link>
                    <Link to="/infoNode"><PhotoExibir nome="NodeJS" img={LogoNode}/></Link>
                    <Link to="/infoPhp"><PhotoExibir nome="PHP" img={LogoPhp}/></Link>
                        
                </div>

                <Voltahome/>
        </div>
    )
};

export default Hablidades;