import "./photoexibir.css";


function PhotoExibir({nome,img}){

    return(
            <div>
                <h4>{nome}</h4>
                <img className="img-exibir" src={img} alt={nome}/>
            
            </div>
    )
}

export default PhotoExibir;