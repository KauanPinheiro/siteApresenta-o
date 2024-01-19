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

function Hablidades(){

    return(

        <div className="paginaFour">

            <div className="containerFour">
            <img src={logo} alt="" className="logo" />
                <h3>Habilidades</h3>
            </div>

                <div className="habilidades">
                    <PhotoExibir nome="React" img={LogoReact}/>
                    <PhotoExibir nome="JavaScript" img={LogoJavascript}/>
                    <PhotoExibir nome="CSS 3" img={LogoCss}/>
                    <PhotoExibir nome="HTML 5" img={LogoHtml}/>
                    <PhotoExibir nome="DB Relacional" img={LogoSql}/>
                    <PhotoExibir nome="NodeJS" img={LogoNode}/>
                    <PhotoExibir nome="PHP" img={LogoPhp}/>
                        
                </div>

        </div>
    )
};

export default Hablidades;