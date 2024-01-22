import "./contatos.css";
import logo from '../../img/MicrosoftTeams-image.png';
import ExibirContatos from "../ExibirContatos/ExibirConatos";
import ftEmail from "../../img/capEmail.png"
import ftgit from "../../img/capLinked.png"
import ftlikedn from "../../img/capIn.png"
import Voltahome from "../Voltahome/Voltahome";
function Contato(){

    return(
        <div className="paginaFive">

            <div className="containerFive">
                <img src={logo} alt="" className="logo" />
                    <h3>Contatos</h3>
            </div>

            <div className='contatos'>
                <ExibirContatos  foto={ftEmail} name="kauan.pnascimento750@gmail.com" />
                <ExibirContatos  foto={ftlikedn} name="https://www.linkedin.com/in/kauan-pinheiro-do-nascimento-479071276/" />
                <ExibirContatos  foto={ftgit} name="https://github.com/KauanPinheiro" />
            </div>
            <Voltahome/>
        </div>
    )
}

export default Contato;