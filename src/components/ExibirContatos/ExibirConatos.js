import './exibircontatos.css';


function ExibitConatos({name,foto}){

    return(
            <div>
                <img className="img-exibir-contatos" src={foto} alt={name}/>
                <p>{name}</p>
            </div>
    )
}

export default ExibitConatos;