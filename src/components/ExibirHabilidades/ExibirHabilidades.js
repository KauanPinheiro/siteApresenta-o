import "./exibirhabilidades.css";

function ExibirHabilidades({title,text}){

    return(
            <div className="container-ultimo">
                <h5 className="titulo-explicativo">{title}</h5>
                <p className="text-explicativo">{text}</p>
            </div>
    )
}

export default ExibirHabilidades;