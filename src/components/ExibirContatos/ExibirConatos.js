import './exibircontatos.css';


function ExibitConatos({name,foto}){

    return(
            <div>
                <img className="img-exibir-contatos" src={foto} alt={name}/>
                <p className='conteudo2'>{name}</p>
            </div>
    )
}

export default ExibitConatos;