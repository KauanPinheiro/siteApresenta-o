import logo from '../../img/MicrosoftTeams-image.png';
import './header.css';




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
                    <ul>Sobre mim</ul>
                    <ul>Meus projetos</ul>
                    <ul>Habilidades</ul>
                    <ul>Contatos</ul>
                </li>   

        </div>
    )
}

export default Header;