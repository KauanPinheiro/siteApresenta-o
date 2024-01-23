import logo from '../../img/MicrosoftTeams-image.png';
import './infohabilidadess.css';
import PhotoExibir from "../imgsExibir/photosExibir"
import  ExibirHabilidades from "../ExibirHabilidades/ExibirHabilidades";
import LogoReact from "../../img/logoReact3.png";
import LogoJs from "../../img/logoJavascript2.png";
import LogoCss from "../../img/logoCss.png";
import LogoHtml from "../../img/logoHtml.jpg";
import LogoSql from "../../img/logoSql.png";
import LogoNode from "../../img/logoNode.png";
import LogoPhp from "../../img/logPhp.png";

function InfoHablidades({titulo , title}){
    // const exibiImagem = () => {
        let x
        let y

        if(titulo === "REACT"){
            x = <PhotoExibir nome={titulo} img={LogoReact}/>
            y = <ExibirHabilidades title={"O que é?"} text={"O React é uma biblioteca modular,"+
            "o que significa que os componentes podem ser facilmente reutilizados e compartilhados"+
            " entre diferentes partes da aplicação."}/>
        }
        else if(titulo === "JS"){
            x = <PhotoExibir nome={titulo} img={LogoJs}/>
            y = <ExibirHabilidades title={"O que é?"} text={"JavaScript é uma linguagem de programação usada"+
            "por desenvolvedores para fazer páginas interativas da Internet."}/>

        }else if(titulo === "CSS"){
            x = <PhotoExibir nome={titulo} img={LogoCss}/>
            y = <ExibirHabilidades title={"O que é?"} text={"CSS é chamado de linguagem Cascading Style Sheet e é usado "+
            "para estilizar elementos escritos em uma linguagem de marcação como HTML."}/>

        }else if(titulo === "HTML"){
            x = <PhotoExibir nome={titulo} img={LogoHtml}/>
            y = <ExibirHabilidades title={"O que é?"} text={"HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web."+
            "Define o significado e a estrutura do conteúdo da web."}/>

        }else if(titulo === "DB" ){
            x = <PhotoExibir nome={titulo} img={LogoSql}/>
            y = <ExibirHabilidades title={"O que é?"} text={"A Linguagem de consulta estruturada (SQL) é uma linguagem de programação para armazenar"+
            "e processar informações em um banco de dados relacional."}/>

        }else if(titulo === "NODE"){
            x = <PhotoExibir nome={titulo} img={LogoNode}/>
            y = <ExibirHabilidades title={"O que é?"} text={"O Node. js é a ferramenta que vai nos entregar a capacidade de interpretar código JavaScript,"+
            "de maneira bem similar ao navegador. "}/>

        }else if (titulo === "PHP"){
            x = <PhotoExibir nome={titulo} img={LogoPhp}/>
            y = <ExibirHabilidades title={"O que é?"} text={"O PHP (um acrônimo recursivo para PHP: Hypertext Preprocessor )"+
            "é uma linguagem de script open source de uso geral,"+
            "muito utilizada, e especialmente adequada para o desenvolvimento web e que pode ser embutida dentro do HTML."}/>
        }

    return(
        <div className="subPagina">

            <div className="containerSeix">
                <img src={logo} alt="" className="logo" />
                <h3>Descrição</h3>
            </div>
                    <div className="habilidades">
                        {x}
                        {y}
                    </div>
        </div>
    )
}
export default InfoHablidades;