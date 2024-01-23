import logo from '../../img/MicrosoftTeams-image.png';
import './header.css';
import {Link} from "react-router-dom";



function Header(){

    return(
        <div className="paginaOne">

            <div className='container'>

                <div className='textos'>
                        <h1>Oi, me chamo <span>Kauan!</span></h1>
                        <h2>Sou desenvolverdor Full Stack</h2>
                </div>

        <figure>
                <img src={logo} alt="" />
        </figure>

            </div>
                <li className="menu">
                    <Link to="/sobremin">Sobre min</Link>
                    <Link to="/meusprojetos">Meus projetos</Link>
                    <Link to="/habilidades">Habilidades</Link>
                    <Link to="/contatos">Contatos</Link>
                </li>   

        </div>
    )
}

export default Header;