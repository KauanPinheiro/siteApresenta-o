import logo from '../../img/MicrosoftTeams-image.png';
import Voltahome from '../Voltahome/Voltahome';
import "./sobremin.css";

function Sobremin(){

    return(
        <div className='paginaTwo'>

            <div className='containerTwo'>
                <img src={logo} alt="" className="logo" />
                <h3> Sobre Mim</h3>
            </div>

            <p className='conteudo'>Cursando Técnico em Informática para Internet pela minha paixão por programar e aprender novas tecnologias ,
                    com o foco em ser um desenvolvedor <span>Front-End</span> , <span>Back-End</span> e <span>Mobile</span>.
                        Hoje trabalho como operador de caixa na empresa Assaí Atacadista.
                            Estou em busca de uma  primeira oportunidade na área do desenvolvimento .</p>

                <Voltahome/>
        </div>
    );
}


export default Sobremin;
