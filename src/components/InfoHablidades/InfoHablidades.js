import logo from '../../img/MicrosoftTeams-image.png';
import './infohabilidadess.css';
import PhotoExibir from "../imgsExibir/photosExibir"
import  ExibirHabilidades from "../ExibirHabilidades/ExibirHabilidades";
import LogoReact from "../../img/logoReact3.png";
import LogoJs from "../../img/logoJavascript2.png";

function InfoHablidades({titulo}){
    // const exibiImagem = () => {
        let d 
        if(titulo === "React"){
             d =<PhotoExibir nome={titulo} img={LogoReact}/>
             
        }
        else if(titulo === "JS"){
          d = <PhotoExibir nome={titulo} img={LogoJs}/>
        }
    // }

    return(
        <div className="subPagina">

            <div className="containerSeix">
                <img src={logo} alt="" className="logo" />
                <h3>Descrição</h3>
                <div className="habilidades">
                {/* <PhotoExibir nome={titulo} img={LogoReact}/> */}
                {d}
                </div>

                    <div className='box-text'>
                        <ExibirHabilidades titulo="O que é?" text="O React é uma biblioteca modular
                        , o que significa que os componentes podem ser facilmente reutilizados e compartilhados entre diferentes partes da aplicação.
                        Isso torna mais fácil manter e expandir uma aplicação à medida que ela cresce,
                        e permite que equipes de desenvolvimento trabalhem de forma mais eficiente juntas."/>
                    </div>
            </div>
        </div>
    )
}
export default InfoHablidades;