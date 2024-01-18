import logo from '../../img/MicrosoftTeams-image.png';
import cleanfood from '../../img/Titulo-main.png'
import './card.css';

function Card(){

    return(
        <div className="cards">

            <div className="containerThree">
            <img src={logo} alt="" className="logo" />
                <h3>Meus projetos</h3>
            </div>

            <div className='flipCard'>
                <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                        <img src={cleanfood} alt="" className="imgcleanfood" />
                    </div>
                    <div className='flip-card-back'>
                        <h4>Clean Food</h4>
                        <p>A clean Food foi criada no ano de 2023,por cinco jovens que se importam com diversidade alimentar
                                bucando trazer conhecimento para as pessoas de todos os gostos.</p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Card;